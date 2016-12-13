require 'rack'

hello_app = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  res.write("Hello world!")
  res.finish
end

display_path = Proc.new do |env|
  req = Rack::Request.new(env)
  res = Rack::Response.new
  res['Content-Type'] = 'text/html'
  path = req.path
  res.write(path)
  res.finish
end

Rack::Server.start(
  app: display_path,
  Port: 3000
)
