import { render, screen, fireEvent } from "@testing-library/react";
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import { fetchAPI } from "../API";
import Main from './Main';

describe("Booking component tests", ()=>{
    test('Init avaiableTimes values', () => {
        window.history.pushState({}, 'Test page', "/booking");
        render(
            <BrowserRouter initialEntries={"booking"}>
                <Main />
            </BrowserRouter>
        );
        const date = screen.getByLabelText('Choose date').value;
        const API_options = fetchAPI(new Date(date));
        const options = document.querySelectorAll('#res-time>option')
        const options_values = Array.from(options, option => option.text);
        expect(options_values).toStrictEqual(API_options);
    });

    test('Update avaiableTimes values', () => {
        window.history.pushState({}, 'Test page', "/booking");
        render(
            <BrowserRouter initialEntries={"booking"}>
                <Main />
            </BrowserRouter>
        );
        const target_date = "2023-03-15";
        const date_input = screen.getByLabelText("Choose date");

        fireEvent.change(date_input, {target: {value: target_date}})

        const API_options = fetchAPI(new Date(target_date));
        const options = document.querySelectorAll('#res-time>option')
        const options_values = Array.from(options, option => option.text);
        expect(options_values).toStrictEqual(API_options);
    });

})
