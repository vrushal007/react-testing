import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test('testing title',()=>{
    render(<Counter title="Hello" />)
    const title = screen.getByTestId("title")
    expect(title).toHaveTextContent("Hello")
})

test('testing counter',async ()=>{
    render(<Counter />)
    const counter = screen.getByTestId('counter')
    const incrementBtn = screen.getByTestId('btn')
    fireEvent.click(incrementBtn)
    expect(counter).toHaveTextContent('1')
})
test('testing multiple click counter',async ()=>{
    render(<Counter />)
    const counter = screen.getByTestId('counter')
    const incrementBtn = screen.getByTestId('btn')
    fireEvent.click(incrementBtn)
    fireEvent.click(incrementBtn)
    fireEvent.click(incrementBtn)
    expect(counter).toHaveTextContent('3')
})