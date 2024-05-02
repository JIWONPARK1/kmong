import clsx from "clsx";
import s from "./TestResult.module.scss";

export default function TestResult() {
  return (
    <div className={s.container}>
      <p className={s.description}>
        당신의 의사결정 과정에서 나타나는 함정들은 다음과 같습니다.
      </p>
      <div className={s.circleContainer}>
        <div className={clsx(s.circle, s.warningCircle)}></div>
        <div className={clsx(s.circle, s.alertCircle)}></div>
        <div className={clsx(s.circle, s.cautionCircle)}></div>
        <div className={clsx(s.circle, s.concernCircle)}></div>
        <div className={s.dividerContaier}>
          <div className={clsx(s.divider, s.divider1)}></div>
          <div className={clsx(s.divider, s.divider2)}></div>
          <div className={clsx(s.divider, s.divider3)}></div>
          <div className={clsx(s.divider, s.divider4)}></div>
          <div className={clsx(s.divider, s.divider5)}></div>
        </div>
      </div>
    </div>
  );
}
