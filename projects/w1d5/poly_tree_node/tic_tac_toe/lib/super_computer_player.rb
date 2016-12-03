require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    root = TicTacToeNode.new(game.board, mark)
    all_children = root.children
    winning = all_children.find { |child| child.winning_node?(mark) }
    return winning.prev_move_pos if winning

    to_block = all_children.find { |child| !child.losing_node?(mark) }
    return to_block.prev_move_pos if to_block

    raise "I'm not supposed to lose..."
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
