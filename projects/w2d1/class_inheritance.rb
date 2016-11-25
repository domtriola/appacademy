class Employee
  attr_reader :name, :title, :salary, :boss

  def initialize(name, title, salary, boss)
    @name, @title, @salary, @boss = name, title, salary, boss
  end

  def bonus(multiplier)
    @salary * multiplier
  end
end

class Manager < Employee

  def initialize(employees, name, title, salary, boss)
    @employees = employees
    super(name, title, salary, boss)
  end

  def bonus(multiplier)
    sum = 0

    @employees.each do |employee|
      sum += employee.salary
    end

    sum * multiplier
  end
end

ned = Employee.new("Ned", "Founder", 1_000_000, nil)
p ned.bonus(5)
ned2 = Employee.new("Ned", "Founder", 1_000_000, nil)
p ned.bonus(5)

darren = Manager.new([ned, ned2], "Darren", "Manager", 70_000, nil)
p darren.bonus(4)
