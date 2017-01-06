json.partial! 'api/guest', guest: @guest
json.gifts do
  json.array! @guest.gifts do |gift|
    json.partial! 'api/gift', gift: gift
  end
end
