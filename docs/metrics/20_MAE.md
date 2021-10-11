---
id: mean-absolute-error
title: Mean Absolute Error
sidebar_label: Mean Absolute Error
---

This metric is extremely similar to the root mean squared error, but instead of taking the square root of the error, it simply takes the absolute value of the error.

If you haven't already, read the [mean squared error](./15_MS) section.

## The formulas

This is the formula for calculating the root mean squared error:

$$
RMSE = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(y_i - \hat{y}_i)^2}
$$

and here is the formula for the mean absolute error:

$$
MAE = \frac{1}{n}\sum_{i=1}^{n}|y_i - \hat{y}_i|
$$

Instead of squaring the error part and then taking a root, we simply take the absolute value, which converts every negative value to a positive value.

## Similarities

Both metrics are similar in many ways, and show the average prediction error of a model. They range from 0 to infinity with 0 being a perfect score and it gets worse as the error increases.

## Differences

Since RSME takes the square of the error and then the, it is more sensitive to outliers like larger errors and gives it more weight.

Take a took at these two cases

```py
# Case 1
from sklearn.metrics import mean_absolute_error, mean_squared_error
# x is ground truth, y is predicted

x = [1,1,1,1]
y = [2,2,2,2]

mean_absolute_error(x,y)
# Output: 1.0
mean_squared_error(x,y)
# Output: 1.0

# Case 2
x = [1,1,1,1]
y = [1,1,3,3]

mean_absolute_error(x,y)
# Output: 1.0
mean_squared_error(x,y)
# Output: 2.0

# Case 3
x = [1,1,1,1]
y = [1,1,1,5]

mean_absolute_error(x,y)
# Output: 1.0
mean_squared_error(x,y)
# Output: 4.0
```

You can notice in case 2, the RSME is twice as big as the error in case 1 and 4 times in case 3 while MAE remains the same, this is because RSME increases with the variance of the frequency distribution of error magnitudes.

RSME punished large errors, MAE does not. MAE is easier to interpret as it is a simple average of the absolute values of the errors.
