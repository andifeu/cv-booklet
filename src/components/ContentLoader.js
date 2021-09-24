import Config from '../config/appconfig.json';

import About from './contents/About';
import Kompetenzen from './contents/Kompetenzen';
import Ausbildung from './contents/Ausbildung';
import Projekte from './contents/Projekte';
import Kontakt from './contents/Kontakt';
import Career from './contents/Career';

const Components = {
    'about': About,
    'kompetenzen': Kompetenzen,
    'ausbildung': Ausbildung,
    'projekte': Projekte,
    'kontakt': Kontakt,
    'career': Career
}

export function getComponentByPageNum(pageNum) {
    let pageId;
    const pageConfig = Config.pages[pageNum];
    if (!pageConfig) {
        return null;
    }

    pageId = pageConfig.id;
    if (pageConfig.id.indexOf('--') > -1) {
        pageId = pageConfig.id.split('--')[0];
    }
    pageConfig.component = Components[pageId];
    return pageConfig;
}
