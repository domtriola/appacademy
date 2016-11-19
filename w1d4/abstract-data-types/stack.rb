class Stack
  def initialize
    @stack = []
  end

  def add(el)
    @stack.push(el)
  end

  def remove
    @stack.pop
  end

  def show
    @stack.dup
  end
end

if __FILE__ == $PROGRAM_NAME
  stack = Stack.new
  stack.add(1)
  stack.add(2)
  stack.add(3)
  p stack.show # => [1, 2, 3]
  p stack.remove # => 3
  p stack.remove # => 2
  p stack.remove # => 1
  p stack.show # => []
end
