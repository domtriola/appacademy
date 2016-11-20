class Simon
  COLORS = %w(red blue green yellow).freeze

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until game_over
      system 'clear'
      take_turn
    end

    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    unless game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    seq.each { |color| display_color(color) }
  end

  def require_sequence
    system 'clear'
    puts "What is the color sequence?"
    puts "(type the first letter of each color without spaces or commas)"
    sequence = gets.chomp.split('')
    @game_over = true unless sequence.length == seq.length
    sequence.each_with_index do |color, index|
      @game_over = true unless color == seq[index][0]
    end
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "You got it!"
    puts "Here's the next one..."
  end

  def game_over_message
    puts "You made it to #{sequence_length} steps"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  private

  def display_color(color)
    puts "Pay attention:"
    puts color
    sleep 1
    system 'clear'
    puts "Pay attention:"
    sleep 0.2
    system 'clear'
  end
end

if __FILE__ == $PROGRAM_NAME
  Simon.new.play
end
