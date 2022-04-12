import pika

credential = pika.PlainCredentials('guest', 'guest')
rabbitmq_conn = pika.BlockingConnection(pika.ConnectionParameters('localhost', credentials=credential))