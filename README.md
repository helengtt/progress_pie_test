# Progress pie
Progress bars are common in software; some accurately give you an idea of how an application is progressing, other hang for what seems like an eternity, sometimes the application just shows a spinner or an hourglass to say ‘something’ is happening...

Sometimes the progress bar isn’t a bar or an hourglass, it is a circle.

Imagine you are using an app that has a circular progress bar, or if you prefer, a progress pie. On the screen is a square area with its bottom corner at (0,0) and its upper-right corner at (100,100). Every pixel in this square is either white or black. Initially, the progress is at 0% and all pixels are white. When the progress percentage, P, is greater than 0% a sector of angle (P% * 360) degrees is coloured black, starting from the line segment from the centre of the square (50,50) to the centre of the top side (50, 100) and proceeding clockwise.

As you wait for the progress pie to fill in, you find yourself wondering whether certain points would be white or black at different amounts of progress.

## Input
The input file begins with an integer T, the number of points you're curious about. For each point, there is a line containing three space-separated integers, P, the amount of progress as a percentage, and X and Y, the coordinates of the point.

## Output
For the ith point, print a line containing "Case #i: " followed by the color of the point, either "black" or "white".

## Constraints
1 ≤ T ≤ 1,000
0 ≤ P, X, Y ≤ 100
Whenever a point (X, Y) is queried, it's guaranteed that all points within a distance of 10-6 of (X, Y) are the same color as (X, Y).

## Explanation of Sample
In the first case all of the points are white, so the point at (55, 55) is of course white.

In the second case, (55, 55) is close to the filled-in sector of the circle, but it's still white.

In the third case, the filled-in sector of the circle now covers (55, 55), coloring it black.

Sample input:
5
0 55 55
12 55 55
13 55 55
99 99 99
87 20 40

Sample output:
Case #1: white
Case #2: white
Case #3: black
Case #4: white
Case #5: black

## Instructions
Write a program that will produce sample output as per above for any number of valid
coordinates.




