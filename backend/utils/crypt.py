import hashlib

def pwd (txt):
    md5 = hashlib.md5()
    md5.update(txt.encode('utf-8'))
    return md5.hexdigest()