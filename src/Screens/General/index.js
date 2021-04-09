import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {numpad} from './constant';
import {TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';

const General = () => {
  const [expression, setExpression] = useState([]);
  const [currentValue, setCurrentValue] = useState('0');
  const [isParenthesis, setIsParenthesis] = useState(false);
  const [isReverse, setIsReverse] = useState(false);

  const adUnitId = __DEV__
    ? TestIds.BANNER
    : 'ca-app-pub-8964250584404868/9183218621';

  const handleNumber = value => {
    if (currentValue === '0') {
      setCurrentValue(`${value}`);
    } else if (expression[expression.length - 1] === '=') {
      setExpression([]);
      setCurrentValue(`${value}`);
    } else {
      setCurrentValue(`${currentValue}${value}`);
    }
  };

  const handleEqual = () => {
    if (
      expression[expression.length - 1] !== '=' &&
      currentValue !== '(' &&
      currentValue !== '(-'
    ) {
      if (currentValue !== '0' && expression.length !== 0) {
        setExpression([...expression, currentValue]);
      }
      let temp = [...expression, currentValue];
      if (isParenthesis) {
        temp = [...temp, ')'];
        setIsParenthesis(false);
      }
      setExpression([...temp, '=']);
      temp.forEach((item, index) => {
        if (item === 'x') {
          temp[index] = '*';
        }
      });
      try {
        // eslint-disable-next-line no-eval
        const result = eval(temp.join(''));
        setCurrentValue(`${result}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleParenthesis = () => {
    if (currentValue === '0') {
      setCurrentValue('(');
      setIsParenthesis(true);
    } else {
      if (isParenthesis) {
        if (currentValue !== '(') {
          setCurrentValue(`${currentValue})`);
          setIsParenthesis(false);
        }
      } else {
        if (currentValue !== '0') {
          setExpression([...expression, currentValue, 'x']);
          setCurrentValue('(');
        } else {
          setCurrentValue('(');
        }
        setIsParenthesis(true);
      }
    }
  };

  const handleOperator = value => {
    if (expression[expression.length - 1] === '=') {
      setExpression([currentValue, value]);
    } else {
      setExpression([...expression, currentValue, value]);
    }
    setCurrentValue('0');
  };

  const clearExpression = () => {
    if (expression[expression.length - 1] === '=') {
      setExpression([]);
    }
  };

  const handleReverse = () => {
    clearExpression();
    if (isReverse) {
      if (currentValue === '(-') {
        setCurrentValue('0');
      } else {
        setCurrentValue(currentValue.slice(2));
      }
      setIsReverse(false);
      setIsParenthesis(false);
    } else {
      if (currentValue === '0') {
        setCurrentValue('(-');
      } else {
        setCurrentValue(`(-${parseFloat(currentValue)}`);
      }
      setIsReverse(true);
      setIsParenthesis(true);
    }
  };

  const calculator = (value, type) => {
    switch (type) {
      case 'number':
        handleNumber(value);
        break;
      case 'operator':
        handleOperator(value);
        break;
      case 'clear':
        setCurrentValue('0');
        setExpression([]);
        setIsParenthesis(false);
        setIsReverse(false);
        break;
      case 'reverse':
        handleReverse();
        break;
      case 'percentage':
        clearExpression();
        setCurrentValue(`${parseFloat(currentValue) * 0.01}`);
        break;
      case 'parenthesis':
        handleParenthesis();
        break;
      case 'equal':
        handleEqual();
        break;
    }
  };

  const handleBackspace = () => {
    if (expression[expression.length - 1] === '=') {
      setExpression([]);
    }
    if (currentValue === '(-') {
      setIsReverse(false);
    }
    if (currentValue === '(') {
      setIsParenthesis(false);
    }
    if (currentValue.length === 1) {
      setCurrentValue('0');
    } else {
      setCurrentValue(currentValue.slice(0, -1));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.screenContainer}>
          <Text style={styles.operationScreen}>{expression.join('')}</Text>
          <Text style={styles.tempResultScreen}>{currentValue}</Text>
        </View>
        <View style={styles.numpadContainer}>
          <View style={styles.numpadInner}>
            <TouchableOpacity
              style={styles.backspace}
              onPress={handleBackspace}>
              <Icon name="backspace-outline" size={35} color="#373B44" />
            </TouchableOpacity>
            <View style={styles.numpadWrapper}>
              {numpad.map((row, indexRow) => (
                <View key={indexRow} style={styles.numpadRow}>
                  {row.map((item, indexItem) => (
                    <TouchableOpacity
                      key={indexItem}
                      style={
                        item.equal ? styles.numpadItemEqual : styles.numpadItem
                      }
                      onPress={() => calculator(item.value, item.type)}>
                      <Text
                        style={
                          item.top
                            ? styles.numpadTopText
                            : item.equal
                            ? styles.numpadEqualText
                            : item.right
                            ? styles.numpadRightText
                            : styles.numpadText
                        }>
                        {item.value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.adContainer}>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ADAPTIVE_BANNER}
          requestOptions={{requestNonPersonalizedAdsOnly: true}}
        />
      </View>
    </View>
  );
};

export default General;
