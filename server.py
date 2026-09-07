#!/usr/bin/env python3
"""Static server for the prototypes with caching disabled,
so edits always show up on a normal refresh."""
import functools
import os
from http.server import HTTPServer, SimpleHTTPRequestHandler

DIR = os.path.dirname(os.path.abspath(__file__))


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        self.send_header('Expires', '0')
        super().end_headers()


if __name__ == '__main__':
    handler = functools.partial(NoCacheHandler, directory=DIR)
    HTTPServer(('', 4175), handler).serve_forever()
