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
  switchFlag1?: { current: boolean | undefined },
  upperVal?: number[] | undefined,
  switchFlag2?: { current: boolean | undefined },
  middleVal?: number[] | undefined
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
  switchFlag1?: { current: boolean | undefined },
  upperVal?: number[] | undefined,
  switchFlag2?: { current: boolean | undefined },
  middleVal?: number[] | undefined
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

export { evalSubmit, checkSubmit, setValue };
