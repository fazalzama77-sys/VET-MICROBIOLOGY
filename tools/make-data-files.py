"""
make-data-files.py  —  Regenerates the empty content data files from data-syllabus.JS
Veterinary Microbiology Studio

WHEN TO RUN THIS
  Only when you ADD or RENAME a topic in data/data-syllabus.JS and want the
  matching empty content block created for you.

WHAT IT DOES / DOES NOT DO
  It NEVER overwrites content you have already written. It only appends
  blocks for topic ids that are missing from the data file.

HOW TO RUN (Windows)
  Double-click  tools/make-data-files.bat
"""

import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
SYLLABUS = os.path.join(DATA, "data-syllabus.JS")

BLOCK = '''  "{tid}": {{
    /* {title} */
    summary:   "",
    desc:      "",
    eliteDesc: "",
    keyPoints: [],
    clinical:  "",
    tables:    [],
    img:       "",
    tags:      []
  }}'''


def parse_units(src):
    """Return [(stream, unit_id, [(topic_id, topic_title), ...]), ...]"""
    units = []
    stream = None
    unit_id = None
    unit_stream = None
    topics = []
    for line in src.splitlines():
        s = line.strip()
        if s.startswith("theory: ["):
            stream = "theory"
        elif s.startswith("practical: ["):
            stream = "practical"
        m = re.search(r'id:\s*"((?:prac-)?unit-\d+|prac-\d+)"', s)
        if m:
            if unit_id:
                units.append((unit_stream, unit_id, topics))
            unit_id = m.group(1)
            unit_stream = stream
            topics = []
            continue
        m = re.search(r'\{\s*id:\s*"([up]\d+-t\d+)"\s*,\s*title:\s*"(.*?)"\s*\}', s)
        if m and unit_id:
            topics.append((m.group(1), m.group(2)))
    if unit_id:
        units.append((unit_stream, unit_id, topics))
    return units


def target_file(stream, unit_id):
    if stream == "theory":
        n = unit_id.split("-")[-1]
        return os.path.join(DATA, "data-theory-unit%s.JS" % n)
    return os.path.join(DATA, "data-practical.JS")


def main():
    if not os.path.exists(SYLLABUS):
        print(f"Error: {SYLLABUS} does not exist.")
        return

    with open(SYLLABUS, "r", encoding="utf-8") as f:
        units = parse_units(f.read())

    buckets = {}
    for stream, unit_id, topics in units:
        buckets.setdefault(target_file(stream, unit_id), []).append(
            (stream, unit_id, topics))

    for path, groups in buckets.items():
        existing = ""
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                existing = f.read()

        added = 0
        chunks = []
        for stream, unit_id, topics in groups:
            var = "theoryData" if stream == "theory" else "practicalData"
            blocks = []
            for tid, title in topics:
                if ('"%s"' % tid) in existing:
                    continue
                blocks.append(BLOCK.format(tid=tid, title=title.replace('"', "'")))
                added += 1
            if blocks:
                chunks.append('%s["%s"] = {\n%s\n};\n' % (var, unit_id, ",\n\n".join(blocks)))

        if not chunks:
            print("  up to date: %s" % os.path.basename(path))
            continue

        if not existing:
            var = "theoryData" if "theory" in os.path.basename(path) else "practicalData"
            header = ("/* Auto-scaffolded for Veterinary Microbiology Studio — safe to edit by hand. */\n"
                      "var %s = (typeof %s !== 'undefined') ? %s : {};\n\n" % (var, var, var))
            body = header + "\n".join(chunks)
        else:
            body = existing.rstrip() + "\n\n" + "\n".join(chunks)

        with open(path, "w", encoding="utf-8") as f:
            f.write(body)
        print("  wrote %d new topic block(s): %s" % (added, os.path.basename(path)))


if __name__ == "__main__":
    print("Scaffolding microbiology data files...")
    main()
    print("Done.")
