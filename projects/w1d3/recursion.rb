require 'byebug'

def range_recursive(start, fin)
  return [start] if start == fin

  range_recursive(start, fin - 1) << fin
end

def range_iterative(start, fin)
  range = []
  index = start
  while index <= fin
    range << index
    index += 1
  end
  range
end

# p range_recursive(2, 5) # => [2, 3, 4, 5]
# p range_iterative(2, 5) # => [2, 3, 4, 5]


def exp1(base, power)
  return 1 if power == 0
  base * exp1(base, power - 1)
end

def exp2(base, power)
  return 1 if power == 0
  return base if power == 1
  return exp2(base, power / 2)**2 if power.even?
  base * exp2(base, power / 2)**2
end

# p exp1(2, 3) # => 8
# p exp2(2, 3) # => 8


class Array
  def deep_dup
    map { |el| el.is_a?(Array) ? el.deep_dup : el }
  end
end

# robot_parts = [
#   ["nuts", "bolts", "washers"],
#   ["capacitors", "resistors", "inductors"]
# ]
#
# robot_parts_copy = robot_parts.deep_dup
#
# # shouldn't modify robot_parts
# p robot_parts_copy[1] << "LEDs" # => ["capacitors", "resistors",
#                                       "inductors", "LEDs"]
# p robot_parts[1]                # => ["capacitors", "resistors",
#                                       "inductors"]


def fibonacci_rec(n)
  return [] if n == 0
  return [1] if n == 1
  return [1, 1] if n == 2

  fibs = fibonacci_rec(n - 1)
  last = fibs[-1]
  second_last = fibs[-2]

  fibs << last + second_last
end

def fibonacci_iter(n)
  fibs = []

  index = 0
  until fibs.length == n
    if index < 2
      fibs << 1
    else
      fibs << fibs[-1] + fibs[-2]
    end

    index += 1
  end

  fibs
end

# p fibonacci_rec(6)  # => [1, 1, 2, 3, 5, 8]
# p fibonacci_iter(6) # => [1, 1, 2, 3, 5, 8]



def permutations(array)
  return [array] if array.length == 1

  perms = []
  array.each do |el|
    dupped = array.dup
    dupped.delete(el)
    permutations(dupped).each { |perm| perms << [el] + perm }
  end

  perms
end

# p permutations([1, 2])
# # =>
# # [[1, 2], [2, 1]]
#
# p permutations([1, 2, 3])
# # =>
# # [[1, 2, 3], [1, 3, 2],
# #  [2, 1, 3], [2, 3, 1],
# #  [3, 1, 2], [3, 2, 1]]


def bsearch(array, target)
  return nil if array.length == 1 && array.first != target
  return 0 if array.length == 1

  guess = array.length / 2
  left = array.take(guess)
  right = array.drop(guess)

  if target < array[guess]
    bsearch(left, target)
  else
    right_search = bsearch(right, target)
    right_search.nil? ? nil : guess + right_search
  end
end

# p bsearch([1, 2, 3], 1) # => 0
# p bsearch([2, 3, 4, 5], 3) # => 1
# p bsearch([2, 4, 6, 8, 10], 6) # => 2
# p bsearch([1, 3, 4, 5, 9], 5) # => 3
# p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
# p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
# p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil


def merge(arr1, arr2)
  merged = []

  until arr1.empty? || arr2.empty?
    if arr1.first < arr2.first
      merged << arr1.shift
    else
      merged << arr2.shift
    end
  end

  merged + arr1 + arr2
end

def merge_sort(array)
  return array if array.length <= 1

  left = array.take(array.length / 2)
  right = array.drop(array.length / 2)

  merge(merge_sort(left), merge_sort(right))
end

# p merge_sort([8,4,5,2,1,7,6,3]) # => [1, 2, 3, 4, 5, 6, 7, 8]


def subsets(array)
  return [[]] if array.empty?

  dupped = array.dup
  last = dupped.pop
  sets = subsets(dupped)

  subsets(dupped).each do |set|
    sets << (set << last)
  end

  sets
end

# p subsets([1, 2, 3]) # => [[], [1], [2], [1, 2], [3],
#                            [1, 3], [2, 3], [1, 2, 3]]


def greedy_make_change(total, coin_values)
  return [] if total == 0

  coin = coin_values.find { |cn| cn <= total }

  [coin] + greedy_make_change(total - coin, coin_values)
end

# p greedy_make_change(24, [10, 7, 1]) # => [10, 10, 1, 1, 1, 1]


def make_better_change(total, coin_values)
  return [] if total == 0
  return nil if coin_values.none? { |coin| coin <= total }

  coins = coin_values.sort.reverse

  change_possibilities = []
  coins.each_with_index do |coin, index|
    next if coin > total

    remainder = total - coin
    best_remainder = make_better_change(remainder, coins.drop(index))
    next if best_remainder.nil?

    change_possibilities << [coin] + best_remainder
  end

  change_possibilities.min_by(&:length)
end

# p make_better_change(24, [10, 7, 1]) # => [10, 7, 7]
