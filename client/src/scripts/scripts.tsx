function evalSubmit(val: number[], i: number, input: any) {
  if (val[i] === undefined) {
    input.value = "";
  } else {
    input.value = val[i];
  }
}

function setValue(
  endFlag: { current: boolean },
  lowerVal: number[],
  switchFlag1?: { current: boolean },
  upperVal?: number[],
  switchFlag2?: { current: boolean },
  middleVal?: number[]
) {
  if (switchFlag1 && switchFlag2 && upperVal && middleVal !== undefined) {
    const inputs: NodeListOf<Element> = !switchFlag1.current
      ? document.querySelectorAll(".upper-input")
      : switchFlag1.current && !switchFlag2.current
      ? document.querySelectorAll(".middle-input")
      : document.querySelectorAll(".lower-input");

    Array.from(inputs).forEach((input: Element, i: number) => {
      if (!switchFlag1.current) {
        evalSubmit(upperVal, i, input);
      } else if (switchFlag1.current && !switchFlag2.current) {
        evalSubmit(middleVal, i, input);
      } else if (!endFlag.current && switchFlag2.current) {
        evalSubmit(lowerVal, i, input);
      }
    });
  }

  if (switchFlag1 && upperVal !== undefined) {
    const inputs: NodeListOf<Element> = !switchFlag1.current ? document.querySelectorAll(".upper-input") : document.querySelectorAll(".lower-input");

    Array.from(inputs).forEach((input: Element, i: number) => {
      if (!endFlag.current && !switchFlag1.current) {
        evalSubmit(upperVal, i, input);
      } else if (!endFlag.current && switchFlag1.current) {
        evalSubmit(lowerVal, i, input);
      }
    });
  }

  if (switchFlag1 === undefined) {
    const inputs: NodeListOf<Element> = document.querySelectorAll(".lower-input");
    Array.from(inputs).forEach((input: Element, i: number) => {
      evalSubmit(lowerVal, i, input);
    });
  }
}

function checkSubmit(
  endFlag: { current: boolean },
  lowerVal: number[],
  switchFlag1?: { current: boolean },
  upperVal?: number[],
  switchFlag2?: { current: boolean },
  middleVal?: number[]
) {
  if (switchFlag1 && switchFlag2 && upperVal && middleVal !== undefined) {
    const value: number = !switchFlag1.current ? upperVal.length : switchFlag1 && !switchFlag2.current ? middleVal.length : lowerVal.length;

    if (!switchFlag1.current && value === 5) {
      switchFlag1.current = true;
    }
    if (!switchFlag2.current && value === 9) {
      switchFlag2.current = true;
    }
    if (switchFlag2.current && value === 7) {
      endFlag.current = true;
    }
  }

  if (switchFlag1 && upperVal !== undefined) {
    const upperRefVal: number = upperVal.length;
    const lowerRefVal: number = lowerVal.length;
    if (!switchFlag1.current && upperRefVal === 21) {
      switchFlag1.current = true;
    }
    if (switchFlag1.current && lowerRefVal === 7) {
      endFlag.current = true;
    }
  }

  if (switchFlag1 === undefined) {
    const value: number = lowerVal.length;

    if (value === 5) {
      endFlag.current = true;
    }
  }
}

//registers and saves onscreen keyboard inputs
function keyboardInput(
  button: any,
  endFlag: { current: boolean },
  lowerVal: number[],
  switchFlag1?: { current: boolean },
  upperVal?: number[],
  switchFlag2?: { current: boolean },
  middleVal?: number[]
) {
  const checkVal: number[] | undefined = button.innerText === "00" ? [0, 0].flat(1) : undefined;
  const btnValue: number | number[] = checkVal !== undefined ? checkVal.flat(1) : parseInt(button.innerText);

  // (3 total inputs)
  if (switchFlag1 && switchFlag2 && upperVal && middleVal !== undefined) {
    const value: any[] = !switchFlag1.current ? upperVal : switchFlag1.current && !switchFlag2.current ? middleVal : lowerVal;

    if (!endFlag.current && checkVal !== undefined) {
      if (
        (!switchFlag1.current && !switchFlag2.current && value.length <= 3) ||
        (switchFlag1.current && !switchFlag2.current && value.length <= 7) ||
        (switchFlag2.current && value.length <= 5)
      ) {
        checkVal.forEach((val) => {
          value.push(val);
        });
      }
    }
    if (!endFlag.current && checkVal === undefined) {
      value.push(btnValue);
    }
  }

  //(2 total inputs)

  if (switchFlag1 && upperVal !== undefined && switchFlag2 === undefined) {
    const value: any[] = !switchFlag1.current ? upperVal : lowerVal;

    if (!endFlag.current && checkVal !== undefined) {
      if ((switchFlag1.current && value.length <= 5) || (!switchFlag1.current && value.length <= 19)) {
        checkVal.forEach((val) => {
          value.push(val);
        });
      }
    }
    if (!endFlag.current && checkVal === undefined) {
      value.push(btnValue);
    }
  }

  //(1 total input)
  if (switchFlag1 === undefined) {
    const value: any[] = lowerVal;

    if (checkVal !== undefined) {
      if (!endFlag.current && lowerVal.length <= 3) {
        checkVal.forEach((val) => {
          value.push(val);
        });
      }
    }
    if (!endFlag.current && checkVal === undefined) {
      value.push(btnValue);
    }
  }
}

//clears current input group
function clearInput(
  endFlag: { current: boolean },
  lowerVal: { current: number[] },
  switchFlag1?: { current: boolean },
  upperVal?: { current: number[] },
  switchFlag2?: { current: boolean },
  middleVal?: { current: number[] }
) {
  //(3 total inputs)
  if (switchFlag1 && switchFlag2 && upperVal && middleVal !== undefined) {
    const inputs: NodeListOf<Element> = !switchFlag1.current
      ? document.querySelectorAll(".upper-input")
      : switchFlag1.current && !switchFlag2.current
      ? document.querySelectorAll(".middle-input")
      : document.querySelectorAll(".lower-input");

    if (!switchFlag1.current && upperVal.current.length !== 0) {
      console.log(0);
      upperVal.current = [];
      Array.from(inputs).forEach((input: Element, i: number) => {
        evalSubmit(upperVal.current, i, input);
      });
    }

    if (switchFlag1.current && !switchFlag2.current && middleVal.current.length === 0) {
      console.log(1);
      const newInputs: NodeListOf<Element> = document.querySelectorAll(".upper-input");
      upperVal.current = [];
      switchFlag1.current = false;
      Array.from(newInputs).forEach((input: Element, i: number) => {
        evalSubmit(upperVal.current, i, input);
      });
    }

    if (switchFlag1.current && !switchFlag2.current && middleVal.current.length !== 0) {
      console.log(2);
      middleVal.current = [];
      Array.from(inputs).forEach((input: Element, i: number) => {
        evalSubmit(middleVal.current, i, input);
      });
    }

    if (switchFlag2.current && lowerVal.current.length === 0) {
      console.log(3);
      const newInputs: NodeListOf<Element> = document.querySelectorAll(".middle-input");
      middleVal.current = [];
      switchFlag2.current = false;
      Array.from(newInputs).forEach((input: Element, i: number) => {
        evalSubmit(middleVal.current, i, input);
      });
    }
    if (switchFlag2.current && lowerVal.current.length !== 0) {
      console.log(4);
      lowerVal.current = [];
      endFlag.current = false;
      Array.from(inputs).forEach((input: Element, i: number) => {
        evalSubmit(lowerVal.current, i, input);
      });
    }
  }
  //(2 total inputs)
  if (switchFlag1 && upperVal !== undefined && switchFlag2 === undefined) {
    const inputs: NodeListOf<Element> = !switchFlag1.current ? document.querySelectorAll(".upper-input") : document.querySelectorAll(".lower-input");

    if (!switchFlag1.current && upperVal.current.length !== 0) {
      upperVal.current = [];
      Array.from(inputs).forEach((input: Element, i: number) => {
        evalSubmit(upperVal.current, i, input);
      });
    }
    if (switchFlag1.current && lowerVal.current.length === 0) {
      const newInputs: NodeListOf<Element> = document.querySelectorAll(".upper-input");
      upperVal.current = [];
      switchFlag1.current = false;
      Array.from(newInputs).forEach((input: Element, i: number) => {
        evalSubmit(upperVal.current, i, input);
      });
    }
    if (switchFlag1.current && lowerVal.current.length !== 0) {
      lowerVal.current = [];
      endFlag.current = false;
      Array.from(inputs).forEach((input: Element, i: number) => {
        evalSubmit(lowerVal.current, i, input);
      });
    }
  }

  //(1 total input)
  if (switchFlag1 === undefined) {
    const inputs: NodeListOf<Element> = document.querySelectorAll(".lower-input");
    lowerVal.current = [];
    endFlag.current = false;
    Array.from(inputs).forEach((input: Element, i: number) => {
      evalSubmit(lowerVal.current, i, input);
    });
  }
}
export { evalSubmit, checkSubmit, setValue, keyboardInput, clearInput };

// Array.from(inputs).forEach((input: Element, i: number) => {
//   if (!switchFlag1.current) {
//     upperVal.current = [];
//     evalSubmit(upperVal.current, i, input);
//   }
//   if (switchFlag1.current && !switchFlag2.current) {
//     if (upperVal.current && middleVal.current !== undefined && middleVal.current.length === 0) {
//       switchFlag1.current = false;
//       upperVal.current = [];
//       evalSubmit(upperVal.current, i, input);
//     }
//     if (middleVal.current !== undefined && middleVal.current.length !== 0) {
//       switchFlag2.current = false;
//       middleVal.current = [];
//       evalSubmit(middleVal.current, i, input);
//     }
//   }
//   if (switchFlag1.current && switchFlag2.current) {
//     if (upperVal.current && middleVal.current !== undefined && middleVal.current.length === 0) {
//       switchFlag1.current = false;
//       switchFlag2.current = false;
//       upperVal.current = [];
//       evalSubmit(upperVal.current, i, input);
//     }
//     if (middleVal.current !== undefined && middleVal.current.length !== 0) {
//       endFlag.current = false;
//       switchFlag2.current = false;
//       middleVal.current = [];
//       evalSubmit(middleVal.current, i, input);
//     }
//     if (lowerVal.current.length !== 0) {
//       lowerVal.current = [];
//       endFlag.current = false;
//       evalSubmit(lowerVal.current, i, input);
//     }
//     if (lowerVal.current.length === 0) {
//       middleVal.current = [];
//       evalSubmit(middleVal.current, i, input);
//     }
//   }
// });
