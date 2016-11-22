class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1, @name2 = name1, name2
    @cups = Array.new(14) { [] }
    place_stones
  end

  def place_stones
    cups.each_with_index do |cup, index|
      unless index == 6 || index == 13
        4.times { cup << :stone }
      end
    end
  end

  def valid_move?(start_pos)
    if start_pos > 13 || start_pos < 0
      raise "Invalid starting cup"
    end
  end

  def make_move(start_pos, current_player_name)
    if current_player_name == @name1
      opponent_cup = 13
    else
      opponent_cup = 6
    end

    stones = cups[start_pos].dup
    cups[start_pos] = []

    pos = start_pos
    until stones.empty?
      pos = (pos + 1) % 14
      cups[pos] << stones.shift unless pos == opponent_cup
    end

    render
    next_turn(pos)
  end

  def next_turn(ending_cup_idx)
    return :prompt if ending_cup_idx == 6 || ending_cup_idx == 13
    return :switch if cups[ending_cup_idx].length < 2
    ending_cup_idx
  end

  def render
    print "      #{@cups[7..12].reverse.map(&:count)}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map(&:count)}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    cups[0..5].all?(&:empty?) ||
    cups[7..13].all?(&:empty?)
  end

  def winner
    return :draw if cups[6] == cups[13]
    if cups[6].length > cups[13].length
      @name1
    else
      @name2
    end
  end
end
