import json
from broker import rabbitmq_conn

def create_checkin_queue(checkin_info):
  user_id = checkin_info.get('user_id')
  venue_id = checkin_info.get('venue_id')
  checkin_id = str(checkin_info.get('checkin_id'))
  if user_id and venue_id and checkin_id:
    channel = rabbitmq_conn.channel()
    exchange = 'checkin.exchange'
    queue = 'checkin.queue'
    routing_key = 'checkin.' + checkin_id + '.' + venue_id + '.' + user_id
    channel.exchange_declare(exchange = exchange, exchange_type = 'topic', durable = True)
    channel.queue_bind(exchange = exchange, queue = queue)
    # try:
    channel.basic_publish(exchange = exchange, routing_key = routing_key, body = json.dumps(checkin_info))
    #   print("Sent %r" % json.dumps(checkin_info))
    #   return True
    # except Exception as e:
    #   print(e)
    #   return False
    return True
  else:
    return False
  
def create_dead_queue(checkin_info, expire = 1):
  user_id = checkin_info.get('user_id')
  venue_id = checkin_info.get('venue_id')
  checkin_id = checkin_info.get('checkin_id')
  if user_id and venue_id and checkin_id:
    channel = rabbitmq_conn.channel()
    exchange = 'expire.exchange'
    queue = 'expire.queue'
    channel.exchange_declare(exchange = exchange, exchange_type = 'fanout', durable = True)
    channel.queue_bind(exchange = exchange, queue = queue)
    delay_exchange = 'expire.exchange.delay'
    delay_queue = 'expire.queue.delay'
    routing_key = ''
    expire_message = {
      'x-message-ttl': expire * 60 * 1000,
      'x-dead-letter-exchange': exchange,
      'x-dead-letter-routing-key': queue
    }
    channel.exchange_declare(exchange = delay_exchange, exchange_type = 'fanout', durable = True)
    channel.queue_declare(queue = delay_queue, durable = True, arguments = expire_message)
    channel.queue_bind(exchange = delay_exchange, queue = delay_queue)
    channel.basic_publish(exchange = delay_exchange, routing_key = routing_key, body = json.dumps(checkin_info))
    return True
  else:
    return False