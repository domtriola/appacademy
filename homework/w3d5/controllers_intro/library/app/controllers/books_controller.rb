class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
  end

  def create
    book = Book.new(book_params)

    if book.save
      redirect_to action: :index
    else
      render text: book.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    book = Book.find(params[:id])

    if book.destroy
      redirect_to action: :index
    else
      render text: "Can't delete book"
    end
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end
