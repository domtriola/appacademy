require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs
(the `it` statements without blocks)! Be sure to
look over the solutions when you're done.
=end

describe Dessert do
  let(:dom) { double("chef", name: "dom triola") }
  subject(:mochi) { Dessert.new('mochi', 10, dom) }

  describe "#initialize" do
    it "sets a type" do
      expect(mochi.type).to eq('mochi')
    end

    it "sets a quantity" do
      expect(mochi.quantity).to eq(10)
    end

    it "starts ingredients as an empty array" do
      expect(mochi.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new('mochi', '10', 'Dom') }.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      mochi.add_ingredient('ice cream')

      expect(mochi.ingredients).to include('ice cream')
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      ingredients = ['water', 'mochiko', 'corn starch', 'ice cream']

      ingredients.each { |ingr| mochi.add_ingredient(ingr) }
      sorted = mochi.ingredients.sort
      mochi.mix!

      expect(mochi.ingredients).not_to eq(sorted)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      mochi.eat(3)

      expect(mochi.quantity).to eq(7)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { mochi.eat(20) }.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(dom).to receive(:titleize).and_return("Chef Dom the Great Baker")

      expect(mochi.serve).to eq("Chef Dom the Great Baker has made 10 mochis!")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(dom).to receive(:bake).with(mochi)

      mochi.make_more
    end
  end
end
