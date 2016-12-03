require_relative '02_searchable'
require 'active_support/inflector'
require 'byebug'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    @class_name.singularize.constantize
  end

  def table_name
    model_class.table_name
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    @primary_key = options[:primary_key] || :id
    @foreign_key = options[:foreign_key] ||
                   (name.to_s.singularize + '_id').to_sym
    @class_name = options[:class_name] ||
                  name.to_s.singularize.camelcase
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    @primary_key = options[:primary_key] || :id
    @foreign_key = options[:foreign_key] ||
                   (self_class_name.to_s.downcase.singularize + '_id').to_sym
    @class_name = options[:class_name] ||
                  name.to_s.singularize.camelcase
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    assoc_options[name] = BelongsToOptions.new(name, options)
    options = BelongsToOptions.new(name, options)

    define_method(name) do
      primary_key = options.send(:primary_key)
      foreign_key = options.send(:foreign_key)

      options.model_class.where(primary_key => self.send(foreign_key)).first
    end
  end

  def has_many(name, options = {})
    options = HasManyOptions.new(name, self, options)

    define_method(name) do
      primary_key = options.send(:primary_key)
      foreign_key = options.send(:foreign_key)

      options.model_class.where(foreign_key => self.send(primary_key))
    end
  end

  def assoc_options
    @assoc_options ||= {}
  end
end

class SQLObject
  extend Associatable
end
