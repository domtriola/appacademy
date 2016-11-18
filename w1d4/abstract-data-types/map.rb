class Map
  def initialize
    @map = []
  end

  def assign(key, value)
    found = false
    @map.each do |el|
      if el[0] == key
        el[1] = value
        found = true
      end
    end
    @map << [key, value] unless found
  end

  def lookup(key)
    @map.find { |el| el[0] == key }[1]
  end

  def remove(key)
    @map.delete_if { |el| el[0] == key }
  end

  def show
    p @map
  end
end

if __FILE__ == $PROGRAM_NAME
  map = Map.new
  map.assign(:a, 1)
  map.assign(:b, 2)
  map.assign(:c, 3)
  map.show # => [[:a, 1], [:b, 2], [:c, 3]]
  p map.lookup(:b) # => 2
  map.remove(:b)
  map.show # => [[:a, 1], [:c, 3]]
  map.assign(:a, 4)
  map.show # => [[:a, 4], [:c, 3]]
end
