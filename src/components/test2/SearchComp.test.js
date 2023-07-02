import { fireEvent, render, screen} from "@testing-library/react"
import SearchComp from "./SearchComp"

test('testing input search bar',()=>{
    render(<SearchComp />)
    const search = screen.getByText('Search:')
    expect(search).toBeInTheDocument()
    const display = screen.getByTestId('display')
    expect(display).not.toHaveTextContent('Vrushal')
    fireEvent.change(screen.getByRole('textbox'),{'target':{'value':'Vrushal'}})
    expect(display).toHaveTextContent(/Searches for Vrushal/i)
})