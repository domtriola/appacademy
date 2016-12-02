require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    where_params = params.keys.map { |key| "#{key} = ?" }.join(' AND ')
    where_values = params.values

    objs = DBConnection.execute(<<-SQL, *where_values)
      SELECT
        *
      FROM
        #{table_name}
      WHERE
        #{where_params}
    SQL

    objs.map { |obj| self.new(obj) }
  end
end

class SQLObject
  extend Searchable
end
