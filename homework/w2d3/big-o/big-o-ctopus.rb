# A Very Hungry Octopus wants to eat the longest fish
# in an array of fish.

# ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
#  'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

# => "fiiiissshhhhhh"


# O(n^2)
def hunt_slowly(fishes)
  fishes.each do |fish|
    biggest_fish = true

    fishes.each do |other_fish|
      biggest_fish = false if other_fish.length > fish.length
    end

    return fish if biggest_fish
  end
end


# O(n log n)
def hunt_with_intent(fishes)
  def sort_fish(fishes)
    return fishes if fishes.length <= 1

    left = fishes.take(fishes.length / 2)
    right = fishes.drop(fishes.length / 2)

    merge_fish(sort_fish(left), sort_fish(right))
  end

  def merge_fish(left, right)
    merged = []

    until left.empty? || right.empty?
      if left.first.length < right.first.length
        merged << left.shift
      else
        merged << right.shift
      end
    end

    merged + left + right
  end

  sort_fish(fishes).last
end


# O(n)
def hunt_quickly(fishes)
  biggest_fish = nil

  fishes.each do |fish|
    if biggest_fish.nil? || fish.length > biggest_fish.length
      biggest_fish = fish
    end
  end

  biggest_fish
end


fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
          'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

p hunt_slowly(fishes)      # => 'fiiiissshhhhhh'
p hunt_with_intent(fishes) # => 'fiiiissshhhhhh'
p hunt_quickly(fishes)     # => 'fiiiissshhhhhh'
