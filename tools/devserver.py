"""Local preview server for development only.

Identical to `python -m http.server` except that it tells the browser never to
cache anything. Without this the browser keeps showing an old copy of the JS
and CSS after an edit, which makes testing changes unreliable.

The real site on GitHub Pages is unaffected by this file.

    python tools/devserver.py [port]      (default port 5177)
"""

import sys
import os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        SimpleHTTPRequestHandler.end_headers(self)

    def log_message(self, fmt, *args):
        sys.stderr.write("%s\n" % (fmt % args))


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5177
    os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
    print("Veterinary Microbiology Studio — dev server")
    print("Open http://localhost:%d  (Ctrl+C to stop)" % port)
    ThreadingHTTPServer(("127.0.0.1", port), NoCacheHandler).serve_forever()
