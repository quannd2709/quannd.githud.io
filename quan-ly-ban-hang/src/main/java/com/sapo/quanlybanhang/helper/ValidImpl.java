package com.sapo.quanlybanhang.helper;

import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeParseException;

@Service
public class ValidImpl implements Valid {
    SimpleDateFormat dateFormatter = new SimpleDateFormat("yyyy/mm/dd");

    @Override
    public boolean checkNull(String a) {
        return a.length() > 0 && a != null;
    }

    @Override
    public boolean checkLength(String a) {
        return (a.length() >= 1 && a.length() <= 50);
    }

    @Override
    public boolean checkString(String a) {
        return a.matches("^[a-zA-Z\\s]*$") && a.length() > 0;
    }

    @Override
    public boolean checkToTal(String a) {
        return a.matches("[0-9]{6}");
    }

    @Override
    public boolean checkNumber(String a) {
        return a.matches("[0-9]+");
    }

    @Override
    public boolean checkDay(String dateStr) {
        try {
            this.dateFormatter.parse(dateStr);
        } catch (DateTimeParseException | ParseException e) {
            return false;
        }
        return true;
    }

}
