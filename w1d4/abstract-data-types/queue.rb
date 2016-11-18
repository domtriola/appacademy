class Queue
  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue.push(el)
  end

  def dequeue
    @queue.shift
  end

  def show
    p @queue
  end
end

if __FILE__ == $PROGRAM_NAME
  queue = Queue.new
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  queue.show # => [1, 2, 3]
  p queue.dequeue # => 1
  p queue.dequeue # => 2
  p queue.dequeue # => 3
  queue.show # => []
end
