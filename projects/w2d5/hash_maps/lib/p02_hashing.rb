class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    arr_dup = self.dup
    hash_int = arr_dup.shift.hash
    arr_dup.each_with_index do |el, index|
      hash_int ^= (el + index).hash
    end

    hash_int
  end
end

class String
  def hash
    chars_arr = chars.map(&:ord)
    chars_arr.each_with_index.inject(0) do |hash_int, (ord, index)|
      hash_int ^ (ord + index).hash
    end
  end
end

class Hash
  def hash
    hash_int = 0
    self.each do |key, value|
      hash_int ^= (key.hash + value.hash)
    end
    hash_int
  end
end
