json.array! @gifts do |gift|
  json.partial! 'api/gift', gift: gift
end
 
