package com.sapo.quanlybanhang.helper;

public interface Valid {
    boolean checkNull(String a);

    boolean checkLength(String a);

    boolean checkString(String a);

    boolean checkToTal(String a);

    public boolean checkNumber(String a);

    public boolean checkDay(String dateStr);
}
