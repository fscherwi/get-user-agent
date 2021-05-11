import {expectType} from 'tsd';
import getuseragent from './index.js';

expectType<string>(getuseragent.chrome('41.0.2228.0'));
expectType<string>(getuseragent.chromeAdvanced('41.0.2228.0', '537.36'));
expectType<string>(getuseragent.firefox('41.0'));
expectType<string>(getuseragent.firefoxAdvanced('41.0', '20100101'));
expectType<string>(getuseragent.opera('12.6'));
expectType<string>(getuseragent.operaAdvanced('12.6', '2.12.388', '9.80'));
expectType<string>(getuseragent.safari('10.0.3'));
expectType<string>(getuseragent.safariAdvanced('10.0.3', '602.4.8', '602.4.8'));
