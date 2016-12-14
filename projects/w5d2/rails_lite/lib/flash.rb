require 'json'

class Flash
  attr_reader :now

  def initialize(req)
    cookie = req.cookies['_rails_lite_app_flash']

    @now = cookie ? JSON.parse(cookie) : {}
    @cookie = {}
  end

  def store_flash(res)
    cookie = { path: '/', value: @cookie.to_json }
    res.set_cookie("_rails_lite_app_flash", cookie)
  end

  def [](key)
    @now[key.to_s] || @cookie[key.to_s]
  end

  def []=(key, val)
    @cookie[key] = val
  end
end
