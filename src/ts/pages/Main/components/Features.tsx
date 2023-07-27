import React from 'react';

import localization from 'ts/helpers/Localization';
import style from '../styles/feature.module.scss';

function Features(): React.ReactElement | null {
  return (
    <section className={style.feature_view}>
      <h2 className={style.feature_view_title}>
        {localization.get('main.feature.title')}
      </h2>
      <div className={style.feature_view_icon}>
        <img
          className={style.feature_view_icon_1}
          src="./assets/custom/oil.png"
        />
        <img
          className={style.feature_view_icon_2}
          src="./assets/custom/mts.png"
        />
        <img
          className={style.feature_view_icon_3}
          src="./assets/custom/bank.png"
        />
      </div>
      <ul className={style.feature_view_list}>
        <li className={style.feature_view_description}>
          {localization.get('main.feature.description1')}
        </li>
        <li className={style.feature_view_description}>
          {localization.get('main.feature.description2')}
        </li>
        <li className={style.feature_view_description}>
          {localization.get('main.feature.description3')}
        </li>
        <li className={style.feature_view_description}>
          {localization.get('main.feature.description4')}
        </li>
        <li className={style.feature_view_description}>
          {localization.get('main.feature.description5')}
        </li>
        <li className={style.feature_view_description}>
          {localization.get('main.feature.description6')}
        </li>
      </ul>
    </section>
  );
}

export default Features;
