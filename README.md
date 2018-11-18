
## Business requirement

A restaurant provides theirs' customers an mobile App that customers can order food on mobile phone. And the App will show customers the **charge** based on selected **item**s, **count** and **promotion**.

There are multiple kinds of promotion, but only one promotion per order. Then it would be a question for customers, which promotion offers the best price. So in order to make it more friendly to customers , the App will automaticly choose the best price promotion for customers.

Now we need to implement function **bestCharge** which can take selected items and count(in specific form) as input, then return calculated receipt.



Known:

- Every item has only one uniq id
- Two kinds of promotions:
  - Buy 30 save 6 yuan
  - 50% discount on specified items
- There is no additional charge(e.g. delivery fee or package fee)
- If two promotions get the same price, then the first promotion is prefered.

## Sample for the 1st promotion

### input

```
["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]
```

### output

```
============= Order Detail =============
Fried Chicken x 1 = 18 yuan
Hamburger x 2 = 12 yuan
Tomato Noodle x 1 = 8 yuan
-----------------------------------
Promotion Applied:
50% discount on specified items(Fried Chicken，Noodle)，saved 13 yuan
-----------------------------------
Total：25 yuan
===================================
```

Sample for the 2nd promotion
------------------

### input

```
["ITEM0013 x 4", "ITEM0022 x 1"]
```

### output

```
============= Order Detail =============
Hamburger x 4 = 24 yuan
Noodle x 1 = 8 yuan
-----------------------------------
Promotion Applied:
Buy 30 save 6 yuan，saved 6 yuan
-----------------------------------
Total：26 yuan
===================================
```

Sample for no promotion
---------------

### input

```
["ITEM0013 x 4"]
```

### output

```
============= Order Detail =============
Hamburger x 4 = 24 yuan
-----------------------------------
Total：24 yuan
===================================
```


## Practice requirement

1. Put your code in **src** directory
1. Implement function **bestCharge** in **best-charge.js**
1. Task by drawing pipe diagram before coding
1. Test first. Code should match your pipe diagram
1. Clean code, proper size for function and meaningful naming


## Tips

1. function`loadAllItems()` can return all items
2. function `loadPromotions()` can return all promotions

## Run tests

### in browser

open `run-specs.html` in browser to see the test result