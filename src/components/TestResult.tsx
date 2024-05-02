import clsx from "clsx";
import s from "./TestResult.module.scss";

const dataLabel = [
  { title: "실행력 판단", eng: "(A)" },
  { title: "정보평가", eng: "(IE)" },
  { title: "문제인식", eng: "(PR)" },
  { title: "해결책 찾기", eng: "(FA)" },
  { title: "대안선택", eng: "(AC)" },
];

const rateValues = [
  { title: "관심", className: "concern", rate: 0 },
  { title: "주의", className: "caution", rate: 30 },
  { title: "경계", className: "alert", rate: 50 },
  { title: "심각", className: "warning", rate: 70 },
];
const dataValues = [
  { position: { top: "34%", left: "28%" } },
  { position: { top: "26%", left: "34%" } },
  { position: { top: "22%", left: "42%" } },
  { position: { top: "21%", right: "41%" } },
  { position: { top: "26%", right: "33%" } },
  { position: { top: "33%", right: "39%" } },
  { position: { bottom: "45.5%", right: "43%" } },
  { position: { bottom: "47%", right: "39%" } },
  { position: { bottom: "42%", right: "40%" } },
  { position: { left: "42%", bottom: "31%" } },
  { position: { left: "48%", bottom: "29%" } },
  { position: { left: "55%", bottom: "31%" } },
  { position: { left: "34%", bottom: "41%" } },
  { position: { left: "26%", bottom: "39%" } },
  { position: { left: "18%", bottom: "35%" } },
];

export default function TestResult() {
  return (
    <div className={s.container}>
      <p className={s.description}>
        당신의 의사결정 과정에서 나타나는 함정들은 다음과 같습니다.
      </p>
      <div className={s.circleContainer}>
        <div className={clsx(s.circle, s.warning)}></div>
        <div className={clsx(s.circle, s.alert)}></div>
        <div className={clsx(s.circle, s.caution)}></div>
        <div className={clsx(s.circle, s.concern)}></div>
        <div className={s.inner}>
          <div className={clsx(s.divider, s.divider1)}></div>
          <div className={clsx(s.divider, s.divider2)}></div>
          <div className={clsx(s.divider, s.divider3)}></div>
          <div className={clsx(s.divider, s.divider4)}></div>
          <div className={clsx(s.divider, s.divider5)}></div>
          <div className={s.dataLabel}>
            {dataLabel.map(({ title, eng }) => (
              <span key={eng}>
                {title}
                <b>{eng}</b>
              </span>
            ))}
          </div>
        </div>
        {dataValues.map(({ position }, index) => (
          <em key={index} style={position} className={s.dataCircle}>
            {index + 1}
          </em>
        ))}
      </div>
      <ul className={s.label}>
        {rateValues.map(({ title, className, rate }, index) => (
          <li key={index}>
            {title && (
              <span className={clsx(s[className], s.labelItem)}>{title}</span>
            )}
            <em key={index} className={s.rate}>
              {rate}
            </em>
          </li>
        ))}
      </ul>
    </div>
  );
}
