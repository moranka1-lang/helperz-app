export const GOALS = [
  { id: 'abroad',   e: '✈️', l: 'שותפ/ה לנסיעה לחול',       s: 'מחפשים מישהי לאותו יעד', travel: true,  months: ['ספטמבר','אוקטובר','נובמבר','דצמבר','ינואר','פברואר'] },
  { id: 'local',    e: '🗺️', l: 'שותפ/ה לנסיעה בארץ',        s: 'צפון, דרום, מדבר — ביחד', travel: true,  months: ['יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר'] },
  { id: 'workout',  e: '💪', l: 'חברה לאימון',                 s: 'מדרבנות אחת את השניה', travel: false, promo: true },
  { id: 'playdate', e: '👶', l: 'פליי דייט — הורים',          s: 'קפה ביחד + ילדים משחקים', travel: false },
  { id: 'beach',    e: '🌊', l: 'חברות לים',                   s: 'בוקר שקט עם שותפה טובה', travel: false },
  { id: 'party',    e: '🎉', l: 'חברות למסיבה',                s: 'לא ללכת לבד לאירוע', travel: false },
  { id: 'retreat',  e: '🧘', l: 'חברות לריטריט',               s: 'יומי/סופש — יוגה, טבע', travel: false },
  { id: 'night',    e: '🌙', l: 'שותפה להליכה הביתה בלילה',   s: 'כי לבד בלילה לא כיף', travel: false },
];

export const GOAL_CONFIG = {
  workout: {
    filters: ['הכל','בוקר','ערב','יוגה','ריצה','פילאטיס','חדר כושר','שחייה'],
    attrs: (p) => [
      { l: p.age + ' שנים', hi: false },
      { l: '📍 ' + p.area, hi: false },
      { l: '🕐 ' + p.time, hi: true },
      { l: '🏃 ' + p.sport, hi: true },
      { l: p.level, hi: false },
    ],
    profiles: [
      { code: 'Runner_TLV_1', age: 32, area: 'צפון ת"א', time: 'בוקר 07:00', sport: 'ריצה', level: 'אמצע', emoji: '🌅', matched: false, liked: false, realName: 'מיכל א.', realMeta: 'מיכל, 32, צפון ת"א · ריצה · בוקר', realContact: '050-xxx-xxxx' },
      { code: 'Yogini_Florentine', age: 28, area: 'פלורנטין', time: 'ערב 19:00', sport: 'יוגה + פילאטיס', level: 'מתחילה', emoji: '🧘', matched: true, liked: false, realName: 'שירה מ.', realMeta: 'שירה, 28, פלורנטין · יוגה · ערב', realContact: 'רואה אותך!' },
      { code: 'SwimLover_Center', age: 41, area: 'מרכז ת"א', time: 'בוקר 06:30', sport: 'שחייה', level: 'ותיקה', emoji: '🏊', matched: false, liked: false, realName: 'דנה ר.', realMeta: 'דנה, 41, מרכז · שחייה', realContact: '050-xxx-xxxx' },
      { code: 'Gym_Ramat_Aviv', age: 35, area: 'רמת אביב', time: 'צהריים 13:00', sport: 'חדר כושר', level: 'אמצע', emoji: '💪', matched: false, liked: false, realName: 'נועה כ.', realMeta: 'נועה, 35, רמת אביב · חדר כושר', realContact: '050-xxx-xxxx' },
      { code: 'Runner_Jaffa', age: 26, area: 'יפו', time: 'בוקר 06:00', sport: 'ריצה', level: 'מתחילה', emoji: '🌊', matched: false, liked: false, realName: 'תמר ל.', realMeta: 'תמר, 26, יפו · ריצה', realContact: '050-xxx-xxxx' },
    ]
  },
  beach: {
    filters: ['הכל','בוקר','אחה"צ','שחייה','שזיפה','ים צפון','ים דרום'],
    attrs: (p) => [
      { l: p.age + ' שנים', hi: false },
      { l: '📍 ' + p.area, hi: false },
      { l: '🕐 ' + p.time, hi: true },
      { l: p.vibe, hi: true },
    ],
    profiles: [
      { code: 'BeachMorning_TLV', age: 34, area: 'ת"א צפון', time: 'בוקר 09:00', vibe: 'שקטה ועם קפה', emoji: '☀️', matched: false, liked: false, realName: 'אורה ש.', realMeta: 'אורה, 34, צפון · בוקר שקט', realContact: '050-xxx-xxxx' },
      { code: 'SunLover_Florentine', age: 29, area: 'פלורנטין', time: 'בוקר 07:30', vibe: 'שמחה וספונטנית', emoji: '🌊', matched: true, liked: false, realName: 'מאיה ל.', realMeta: 'מאיה, 29, פלורנטין · בוקר ים', realContact: 'רואה אותך!' },
      { code: 'AfternoonSwim_Center', age: 38, area: 'מרכז', time: 'אחה"צ 16:00', vibe: 'שחייה + שיחה', emoji: '🏊', matched: false, liked: false, realName: 'ריבה כ.', realMeta: 'ריבה, 38, מרכז · אחה"צ', realContact: '050-xxx-xxxx' },
    ]
  },
  abroad: {
    filters: ['הכל','אירופה','אסיה','אמריקה','ג׳ינג׳ האצ׳ינג','זוג','סולו'],
    attrs: (p) => [
      { l: p.age + ' שנים', hi: false },
      { l: '✈️ ' + p.dest, hi: true },
      { l: '📅 ' + p.month, hi: true },
      { l: p.style, hi: false },
    ],
    profiles: [
      { code: 'Traveler_BKK_Nov', age: 31, area: 'ת"א', dest: 'בנגקוק', month: 'נובמבר', style: 'תרמילאי', emoji: '🗺️', matched: false, liked: false, realName: 'ליאת מ.', realMeta: 'ליאת, 31 · בנגקוק · נובמבר', realContact: '050-xxx-xxxx' },
      { code: 'EuroTrip_Sep', age: 27, area: 'ת"א', dest: 'אירופה', month: 'ספטמבר', style: 'זוג ידידות', emoji: '🏰', matched: true, liked: false, realName: 'יעל ג.', realMeta: 'יעל, 27 · אירופה · ספטמבר', realContact: 'רואה אותך!' },
      { code: 'Japan_Oct_Solo', age: 36, area: 'גוש דן', dest: 'יפן', month: 'אוקטובר', style: 'תרמילאי/ית', emoji: '🗾', matched: false, liked: false, realName: 'רון א.', realMeta: 'רון, 36 · יפן · אוקטובר', realContact: '050-xxx-xxxx' },
    ]
  },
};

export const DEFAULT_CONFIG = {
  filters: ['הכל','כל הזמנים','בוקר','ערב','סופ"ש'],
  attrs: (p) => [{ l: p.age + ' שנים', hi: false }, { l: '📍 ' + p.area, hi: false }, { l: p.vibe || '', hi: true }],
  profiles: [
    { code: 'User_TLV_A', age: 30, area: 'תל אביב', vibe: 'חברותית', emoji: '✨', matched: false, liked: false, realName: 'שרה ל.', realMeta: 'שרה, 30, תל אביב', realContact: '050-xxx-xxxx' },
    { code: 'User_Center_B', age: 26, area: 'מרכז', vibe: 'שקטה', emoji: '🌿', matched: true, liked: false, realName: 'נועה כ.', realMeta: 'נועה, 26, מרכז', realContact: 'רואה אותך!' },
    { code: 'User_North_C', age: 34, area: 'צפון ת"א', vibe: 'ספונטנית', emoji: '⚡', matched: false, liked: false, realName: 'טל מ.', realMeta: 'טל, 34, צפון ת"א', realContact: '050-xxx-xxxx' },
  ]
};
