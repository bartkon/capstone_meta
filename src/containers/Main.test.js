import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import { fetchAPI } from "../API";
import Main from './Main';

describe("Booking component tests", ()=>{
    test('Init avaiableTimes values', () => {
        renderBooking();
        const date = screen.getByLabelText('Choose date').value;
        const API_options = fetchAPI(new Date(date));
        const options = document.querySelectorAll('#res-time>option')
        const options_values = Array.from(options, option => option.text);
        expect(options_values).toStrictEqual(API_options);
    });

    test('Update avaiableTimes values', () => {
        renderBooking();
        const target_date = "2023-03-15";
        const date_input = screen.getByLabelText("Choose date");
        fireEvent.change(date_input, {target: {value: target_date}})
        const API_options = fetchAPI(new Date(target_date));
        const options = document.querySelectorAll('#res-time>option');
        const options_values = Array.from(options, option => option.text);
        expect(options_values).toStrictEqual(API_options);
    });
    
});

describe("Booking form validation tests", ()=>{
    test('Test date and submission validation', () => {
        renderBooking();
        const past_date = "2023-02-15";
        const date_input = screen.getByLabelText("Choose date");
        const submit_button = screen.getByRole("button", {type: "submit"});
        fireEvent.change(date_input, {target: {value: past_date}});
        expect(submit_button.disabled).toBe(true);
    });

    test('Test number validation', () => {
        renderBooking();
        const guests_over = 24;
        const number_input = screen.getByLabelText("Guests");
        fireEvent.change(number_input, {target: {value: guests_over}});
        expect(Number.parseInt(number_input.value)).toBeLessThanOrEqual(10);
    });

    test('Test occasion select require', () => {
        renderBooking();
        expect(screen.getByLabelText("Occasion")).toHaveProperty("required");
    });
    test('Test time select require', () => {
        renderBooking();
        expect(screen.getByLabelText("Time")).toHaveProperty("required");
    });

});


const renderBooking = () => {
    window.history.pushState({}, 'Test page', "/booking");
    render(
        <BrowserRouter initialEntries={"booking"}>
            <Main />
        </BrowserRouter>
    );
}