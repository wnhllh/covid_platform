# import eventlet
# eventlet.monkey_patch()

# import socketio
# import eventlet.wsgi

# sio = socketio.Server(async_mode = 'eventlet')
# app = socketio.Middleware(sio)
# eventlet.wsgi.server(eventlet.listen(('', 5000)), app)