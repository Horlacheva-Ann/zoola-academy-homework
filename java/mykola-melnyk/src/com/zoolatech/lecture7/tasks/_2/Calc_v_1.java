package com.zoolatech.lecture7.tasks._2;

public class Calc_v_1 implements Calc {
    private int storedValue;
    public Calc_v_1(int value) {
        storedValue = value;
    }
    public synchronized int getStoredValue() {
        return storedValue;
    }
    public synchronized int add(int operand) {
       return storedValue += operand;
    }
    public synchronized int subtract(int operand) {
       return storedValue -= operand;
    }


}
