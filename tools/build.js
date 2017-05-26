/*eslint-disable no-console*/

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

webpack(webpackConfig).run((err, stats)    =>  {
    if(err) {
        console.log(err.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if  (jsonStats.hasErrors)   {
        return jsonStats.errors.map(error  =>   console.log(err.red));
    }

    if  (jsonStats.hasWarnings) {
        console.log('webpack has the following warnings: ' .bold.yellow);
        jsonStats.warnings.map(warnings  =>  console.log(warning.yellow));
    }

    console.log(`webpack stats: ${stats}`);

    console.log('it worked');

    return 0;
});
