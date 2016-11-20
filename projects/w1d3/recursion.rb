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

end

# p bsearch([1, 2, 3], 1) # => 0
# p bsearch([2, 3, 4, 5], 3) # => 1
# p bsearch([2, 4, 6, 8, 10], 6) # => 2
# p bsearch([1, 3, 4, 5, 9], 5) # => 3
# p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
# p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
# p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil


def merge(arr1, arr2)
end

def merge_sort(array)
end

def subsets(array)
end

def greedy_make_change(total, coin_values)
end

def make_better_change(total, coin_values)
end
