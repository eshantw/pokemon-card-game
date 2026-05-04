// ==========================================
// 🚀 遊戲資料庫 (data.js) - 最終平衡排序版
// ⚠️ 注意：招式效果字典已經移至 index.html 內建，這裡只存放純資料！
// 編輯後，請在網頁大廳點擊「同步資料至雲端」
// ==========================================

const POKEMON_DB = [
    // 🌿 草屬性 (Grass) - 依 HP 排序
    { id: 43, name: '走路草', type: 'grass', hp: 60, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'催眠粉', d:10, cost:['grass'], special:'asleep', desc:'對手必定睡眠'}, {n:'麻痺粉', d:40, cost:['grass','any'], special:'paralyze_flip', desc:'硬幣正面麻痺'}] },
    { id: 755, name: '睡睡菇', type: 'grass', hp: 60, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'閃爍', d:10, cost:['grass'], special:'asleep_flip', desc:'正面對手睡眠'}, {n:'吸取', d:20, cost:['grass','any'], special:'heal_self_20', desc:'恢復自己20HP'}] },
    { id: 810, name: '敲音猴', type: 'grass', hp: 60, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'抓', d:10, cost:['any'], special:'draw_1', desc:'抽 1 張卡'}, {n:'木枝突刺', d:30, cost:['grass','any'], special:'plus_dmg_if_status_40', desc:'異常狀態時傷害+40'} ] },
    { id: 1, name: '妙蛙種子', type: 'grass', hp: 70, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'藤鞭', d:10, cost:['grass'], special:'reduce_dmg_taken_flip_30', desc:'正面下回受傷-30'}, {n:'茂盛鞭打', d:30, cost:['grass','any'], special:'red_hp_burst_40', desc:'HP<30%時傷害+40'}] },
    { id: 44, name: '臭臭花', type: 'grass', hp: 80, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'溶解液', d:20, cost:['grass','any'], special:'poison', desc:'必定中毒'}, {n:'誘導香氣', d:10, cost:['grass','any','any'], special:'force_swap_choose', desc:'選擇對手後備與戰鬥互換'}] },
    { id: 906, name: '新葉喵', type: 'grass', hp: 80, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'飛葉快刀', d:10, cost:['grass'], special:'draw_1', desc:'抽 1 張卡'}, {n:'種子炸彈', d:40, cost:['grass','any'], special:'plus_dmg_if_status_30', desc:'異常狀態時傷害+30'} ] },
    { id: 2, name: '妙蛙草', type: 'grass', hp: 100, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'寄生種子', d:30, cost:['grass','any'], special:'heal_self_20', desc:'恢復自己20HP'}, {n:'劇毒之鞭', d:50, cost:['grass','grass','any'], special:'poison_flip', desc:'硬幣正面使對手中毒'}] },
    { id: 12, name: '巴大蝶', type: 'grass', hp: 110, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'毒粉', d:20, cost:['grass'], special:'poison', desc:'必定中毒'}, {n:'起風', d:50, cost:['any','any']}] },
    { id: 907, name: '蒂蕾喵', type: 'grass', hp: 110, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'劈開', d:40, cost:['grass','any']}, {n:'毒擊', d:50, cost:['grass','grass','any'], special:'poison', desc:'必定中毒'}] },
    { id: 470, name: '葉伊布', type: 'grass', hp: 120, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'葉子防守', d:40, cost:['grass','grass'], special:'reduce_dmg_taken_30', desc:'下回合受傷-30'}, {n:'葉刃', d:90, cost:['grass','grass','any']}] },
    { id: 45, name: '霸王花', type: 'grass', hp: 130, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'麻痺粉', d:30, cost:['grass','any'], special:'paralyze_flip', desc:'硬幣正面麻痺'}, {n:'超級吸取', d:50, cost:['grass','grass','any'], special:'heal_self_30', desc:'恢復自己 30 HP'}] },
    { id: 3, name: '妙蛙花', type: 'grass', hp: 150, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'陽光烈焰', d:70, cost:['grass','grass','any']}, {n:'瘋狂植物', d:130, cost:['grass','grass','grass','any'], special:'cant_act_next_and_discard_1', desc:'下回禁攻且自棄1能'}] },
    { id: 812, name: '轟擂金剛猩', type: 'grass', hp: 150, weakness: 'fire', resistance: {type:'water', val:20}, attacks: [{n:'鼓打', d:50, cost:['grass','any']}, {n:'木槌', d:130, cost:['grass','grass','grass','any'], special:'self_dmg_30', desc:'自傷 30 HP'}] },

    // 🔥 火屬性 (Fire) - 依 HP 排序
    { id: 4, name: '小火龍', type: 'fire', hp: 60, weakness: 'water', resistance: {type:'grass', val:20}, attacks: [{n:'抓', d:10, cost:['any'], special:'draw_1', desc:'抽 1 張卡'}, {n:'猛火咆哮', d:30, cost:['fire','any'], special:'red_hp_burst_40', desc:'HP<30%時傷害+40'}] },
    { id: 5, name: '火恐龍', type: 'fire', hp: 90, weakness: 'water', resistance: {type:'grass', val:20}, attacks: [{n:'火焰牙', d:50, cost:['fire','fire']}, {n:'噴射火焰', d:70, cost:['fire','fire','any']}] },
    { id: 136, name: '火伊布', type: 'fire', hp: 130, weakness: 'water', resistance: {type:'grass', val:20}, attacks: [{n:'破壞火', d:30, cost:['fire','fire'], special:'discard_enemy_energy_flip', desc:'硬幣正面丟棄對手1能量'}, {n:'火焰旋渦', d:100, cost:['fire','fire','any'], special:'self_dmg_20', desc:'自傷20點'}] },
    { id: 38, name: '九尾', type: 'fire', hp: 140, weakness: 'water', resistance: {type:'grass', val:20}, attacks: [{n:'熱風', d:30, cost:['fire','any'], special:'burn_flip', desc:'擲幣正面敵灼傷'}, {n:'灼熱氣息', d:130, cost:['fire','fire','fire','any'], special:'cant_act_next_and_discard_1', desc:'下回禁攻且自棄1能'}] },
    { id: 815, name: '閃焰王牌', type: 'fire', hp: 140, weakness: 'water', resistance: {type:'grass', val:20}, attacks: [{n:'二連踢', d:50, cost:['fire','any']}, {n:'火焰球', d:120, cost:['fire','fire','any'], special:'discard_2_fire', desc:'使用後喪失2個火能量'}] },
    { id: 6, name: '噴火龍', type: 'fire', hp: 150, weakness: 'water', resistance: {type:'grass', val:20}, attacks: [{n:'空氣斬', d:60, cost:['fire','fire','any']}, { n:'大字爆炎', d:140, cost:['fire','fire','fire','any'], special:'discard_2_fire', desc:'喪失2火能量'}] },

    // 💧 水屬性 (Water) - 依 HP 排序
    { id: 7, name: '傑尼龜', type: 'water', hp: 70, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'縮入殼中', d:10, cost:['water'], special:'immune_next_flip', desc:'正面下回免傷'}, {n:'激流噴射', d:20, cost:['water','any'], special:'red_hp_burst_50', desc:'HP<30%時傷害+50'}] },
    { id: 912, name: '潤水鴨', type: 'water', hp: 70, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'水流噴射', d:10, cost:['water'], special:'snipe_choose_30', desc:'可對敵方後備區任一目標造成30傷害'}, {n:'液態裂破', d:50, cost:['water','any'], special:'damage_flip_20', desc:'硬幣正面+20傷害'}] },
    { id: 8, name: '卡咪龜', type: 'water', hp: 90, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'水之波動', d:50, cost:['water','water']}, {n:'火箭頭槌', d:70, cost:['water','water','any'], special:'reduce_dmg_taken_flip', desc:'正面受傷-30'}] },
    { id: 148, name: '哈克龍', type: 'water', hp: 100, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'龍之俯衝', d:50, cost:['water','any'], special:'paralyze_flip', desc:'正面麻痺'}, {n:'破壞光線', d:70, cost:['water','any','any'], special:'cant_act_next', desc:'下回合無法使用招式'}] },
    { id: 134, name: '水伊布', type: 'water', hp: 120, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'水槍', d:30, cost:['water','any']}, {n:'泡沫吸取', d:60, cost:['water','water','any'], special:'heal_self_30', desc:'恢復自己30HP'}] },
    { id: 131, name: '拉普拉斯', type: 'water', hp: 120, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'冰礫', d:20, cost:['water']}, {n:'冰凍光束', d:80, cost:['water','water','any'], special:'asleep_flip', desc:'正面對手睡眠'}] },
    { id: 350, name: '美納斯', type: 'water', hp: 120, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'水之波動', d:40, cost:['water','any'], special:'asleep_flip', desc:'正面對手睡眠'}, {n:'龍捲風', d:80, cost:['water','water','any'], special:'confuse_flip', desc:'正面對手混亂'}] },
    { id: 130, name: '暴鯉龍', type: 'water', hp: 130, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'咬碎', d:40, cost:['water','water']}, {n:'破壞光線', d:100, cost:['water','water','any','any'], special:'discard_enemy_energy_flip', desc:'擲幣正面則棄對手1能量'}] },
    { id: 471, name: '冰伊布', type: 'water', hp: 130, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'雪隱', d:30, cost:['water','water'], special:'immune_next_flip', desc:'硬幣正面下回合免傷'}, {n:'冰凍光束', d:100, cost:['water','water','water'], special:'asleep_flip', desc:'硬幣正面對手睡眠'}] },
    { id: 883, name: '腮魚海獸', type: 'water', hp: 130, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'冰凍牙', d:40, cost:['water','water'], special:'paralyze_flip', desc:'正面對手麻痺'}, {n:'凍寒咬', d:90, cost:['water','water','any']}] },
    { id: 818, name: '千面避役', type: 'water', hp: 140, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'淚眼汪汪', d:20, cost:['any'], special:'enemy_dmg_minus_30', desc:'下回合敵方攻擊-30'}, {n:'狙擊暗擊', d:40, cost:['water','any'], special:'snipe_choose_30', desc:'可對敵方後備區任一目標造成30傷害'}] },
    { id: 9, name: '水箭龜', type: 'water', hp: 150, weakness: 'electric', resistance: {type:'fire', val:20}, attacks: [{n:'堅硬甲殼', d:10, cost:['water','water','any'], special:'reduce_dmg_taken_50', desc:'下回受傷-50'}, {n:'加農水炮', d:130, cost:['water','water','water','any'], special:'dmg_flip', desc:'需擲幣正面成功'}] },

    // ⚡ 電屬性 (Electric) - 依 HP 排序
    { id: 835, name: '來電汪', type: 'electric', hp: 70, weakness: 'brown', resistance: {type:'normal', val:20}, attacks: [{n:'搖尾巴', d:10, cost:['any']}, {n:'臉頰摩擦', d:30, cost:['electric','any'], special:'paralyze_flip', desc:'硬幣正面對手麻痺'}] },
    { id: 25, name: '皮卡丘', type: 'electric', hp: 100, weakness: 'brown', resistance: {type:'normal', val:20}, attacks: [{n:'高速移動', d:30, cost:['electric'], special:'immune_next_flip', desc:'正面免傷'}, {n:'十萬伏特', d:100, cost:['electric','electric','electric']}] },
    { id: 26, name: '雷丘', type: 'electric', hp: 110, weakness: 'brown', resistance: {type:'normal', val:20}, attacks: [{n:'電球', d:50, cost:['electric','electric'], special:'paralyze_flip', desc:'硬幣正面麻痺'}, {n:'伏特攻擊', d:120, cost:['electric','electric','electric','any'], special:'self_dmg_20', desc:'自己受到20傷害'}] },
    { id: 877, name: '莫魯貝可', type: 'electric', hp: 110, weakness: 'brown', resistance: {type:'normal', val:20}, attacks: [{n:'餓肚子', d:10, cost:['any'], special:'draw_1', desc:'抽 1 張卡'}, {n:'氣場輪', d:50, cost:['electric','electric'], special:'paralyze_flip', desc:'正面對手麻痺'}] },
    { id: 135, name: '雷伊布', type: 'electric', hp: 120, weakness: 'brown', resistance: {type:'normal', val:20}, attacks: [{n:'二連擊', d:20, cost:['electric','electric'], special:'flip_2_x20', desc:'擲2次硬幣，正面次數x20'}, {n:'十萬伏特', d:90, cost:['electric','electric','any'], special:'discard_1_elec_and_paralyze', desc:'棄1電能，對手必定麻痺'}] },

    // 🟤 棕屬性 (Brown) - 依 HP 排序
    { id: 83, name: '大蔥鴨', type: 'brown', hp: 70, weakness: ['grass', 'water'], resistance: {type:'electric', val:20}, attacks: [{n:'突擊', d:20, cost:['any']}, {n:'碎岩', d:30, cost:['brown','any'], special:'damage_flip_30', desc:'硬幣正面+30傷害'}] },
    { id: 701, name: '摔角鷹人', type: 'brown', hp: 80, weakness: ['grass', 'water'], resistance: {type:'electric', val:20}, attacks: [{n:'飛身重壓', d:30, cost:['brown']}, {n:'勇鳥猛攻', d:70, cost:['brown','any'], special:'self_dmg_20', desc:'自己受到20傷害'}] },
    { id: 870, name: '列陣兵', type: 'brown', hp: 100, weakness: ['grass', 'water'], resistance: {type:'electric', val:20}, attacks: [{n:'鐵頭', d:30, cost:['brown','any'], special:'paralyze_flip', desc:'硬幣正面麻痺'}, {n:'岩石封鎖', d:40, cost:['brown','any','any'], special:'asleep_flip', desc:'硬幣正面睡眠'}] },
    { id: 448, name: '路卡利歐', type: 'brown', hp: 110, weakness: ['grass', 'water'], resistance: {type:'electric', val:20}, attacks: [{n:'波導彈', d:30, cost:['brown','any'], special:'damage_flip_20', desc:'硬幣正面傷害+20'}, {n:'起死回生', d:40, cost:['brown','brown','any'], special:'red_hp_burst_60', desc:'HP<30%時傷害+60'}] },
    { id: 865, name: '蔥遊兵', type: 'brown', hp: 110, weakness: ['grass', 'water'], resistance: {type:'electric', val:20}, attacks: [{n:'狂舞揮打', d:50, cost:['brown','any']}, {n:'流星突擊', d:90, cost:['brown','brown','any'], special:'cant_act_next', desc:'下回合禁攻'} ] },
    { id: 884, name: '鋁鋼龍', type: 'brown', hp: 130, weakness: ['grass', 'water'], resistance: {type:'electric', val:20}, attacks: [{n:'龍爪', d:50, cost:['brown','any']}, {n:'加農光炮', d:110, cost:['brown','brown','any','any'], special:'cant_act_next_and_discard_1', desc:'下回禁攻且自棄1能'} ] },
    { id: 475, name: '艾路雷朵', type: 'brown', hp: 140, weakness: ['grass', 'water'], resistance: {type:'electric', val:20}, attacks: [{n:'劈開', d:50, cost:['brown','any']}, {n:'近身戰', d:120, cost:['brown','brown','any'], special:'self_dmg_20', desc:'自己受到20傷害'}] },
    { id: 623, name: '泥偶巨人', type: 'brown', hp: 140, weakness: ['grass', 'water'], resistance: {type:'electric', val:20}, attacks: [{n:'鐵壁', d:10, cost:['brown','any'], special:'reduce_dmg_taken_50', desc:'下回合受傷-50'}, {n:'暗影拳', d:60, cost:['brown','brown','any'], special:'ignore_resistance', desc:'無視敵方減傷與抗性'}] },
    { id: 445, name: '烈咬陸鯊', type: 'brown', hp: 150, weakness: ['grass', 'water'], resistance: {type:'electric', val:20}, attacks: [{n:'龍爪', d:50, cost:['brown','any']}, {n:'地震', d:90, cost:['brown','brown','any'], special:'aoe_20', desc:'對手全體後備區受到20傷害'}] },
    { id: 784, name: '杖尾鱗甲龍', type: 'brown', hp: 150, weakness: ['grass', 'water'], resistance: {type:'electric', val:20}, attacks: [{n:'戰吼', d:40, cost:['brown','any'], special:'reduce_dmg_taken_30', desc:'下回受傷-30'}, {n:'魂舞烈音爆', d:120, cost:['brown','brown','any','any'], special:'seal_both_discard', desc:'雙方各棄 1 能'}] },

    // 🟣 紫屬性 (Purple) - 依 HP 排序
    { id: 764, name: '花療環環', type: 'purple', hp: 80, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'花療', d:20, cost:['purple'], special:'heal_choose_30', desc:'選擇我方1隻寶可夢恢復30HP'}, {n:'魔法葉', d:40, cost:['purple','any']}] },
    { id: 869, name: '霜奶仙', type: 'purple', hp: 90, weakness: 'purple', resistance: {type:'brown', val:20}, attacks: [{n:'芳香治療', d:10, cost:['any'], special:'heal_choose_30', desc:'選擇我方1隻寶可夢恢復30HP'}, {n:'魔法閃耀', d:50, cost:['purple','any'], special:'confuse_flip', desc:'正面對手混亂'}] },
    { id: 971, name: '墓仔狗', type: 'purple', hp: 100, weakness: 'purple', resistance: {type:'brown', val:20}, attacks: [{n:'挖洞', d:40, cost:['purple','any'], special:'immune_next_flip', desc:'正面下回免傷'}, {n:'嬉鬧', d:60, cost:['purple','any','any']}] },
    { id: 94, name: '耿鬼', type: 'purple', hp: 110, weakness: 'purple', resistance: {type:'brown', val:20}, attacks: [{n:'毒瓦斯', d:20, cost:['purple','any'], special:'poison', desc:'必定中毒'}, {n:'漆黑', d:60, cost:['purple','any','any'], special:'confuse_flip', desc:'硬幣正面對手混亂'}] },
    { id: 196, name: '太陽伊布', type: 'purple', hp: 120, weakness: 'purple', resistance: {type:'brown', val:20}, attacks: [{n:'念力', d:40, cost:['purple','any'], special:'paralyze_flip', desc:'硬幣正面麻痺'}, {n:'精神強念', d:80, cost:['purple','any','any']}] },
    { id: 151, name: '夢幻', type: 'purple', hp: 130, weakness: 'purple', resistance: {type:'any', val:20}, attacks: [{n:'超感知', d:40, cost:['purple','any'], special:'draw_1', desc:'抽 1 張卡'}, {n:'變身', d:10, cost:['purple','purple','any','any'], special:'transform_choose', desc:'複製對手，回後備恢復60HP'}] },
    { id: 700, name: '仙子伊布', type: 'purple', hp: 130, weakness: 'purple', resistance: {type:'brown', val:20}, attacks: [{n:'治癒波動', d:20, cost:['purple','any'], special:'heal_all_allies_30', desc:'我方場上與後備全體恢復30HP'}, {n:'月亮之力', d:60, cost:['purple','any','any'], special:'enemy_dmg_minus_30', desc:'下回合對手攻擊力-30'}] },
    { id: 282, name: '沙奈朵', type: 'purple', hp: 140, weakness: 'purple', resistance: {type:'brown', val:20}, attacks: [{n:'魔法閃耀', d:50, cost:['purple','any'], special:'confuse_flip', desc:'正面使敵混亂'}, {n:'封印', d:80, cost:['purple','purple','any','any'], special:'seal_both_discard', desc:'雙方棄能且敵下回禁攻'} ] },
    { id: 858, name: '布莉姆溫', type: 'purple', hp: 140, weakness: 'purple', resistance: {type:'brown', val:20}, attacks: [{n:'冥想', d:10, cost:['purple'], special:'calm_mind_20', desc:'下回自己傷害+20且受傷-20'}, {n:'精神強念', d:60, cost:['purple','purple','any'], special:'plus_dmg_per_energy_10', desc:'自己身上每附著1個能量，傷害+10'}] },
    { id: 150, name: '超夢', type: 'purple', hp: 150, weakness: 'purple', resistance: {type:'any', val:30}, attacks: [{n:'自我再生', d:10, cost:['purple'], special:'heal_self_30', desc:'恢復自己30HP'}, {n:'精神擊破', d:80, cost:['purple','purple','any'], special:'plus_dmg_per_energy_10', desc:'身上每附著1個能量，傷害再+10'}] },
    { id: 887, name: '多隆巴魯托', type: 'purple', hp: 150, weakness: 'purple', resistance: {type:'brown', val:20}, attacks: [{n:'龍箭', d:25, cost:['purple','any'], special:'damage_flip_25', desc:'擲 1 幣正面+25'}, {n:'龍之俯衝', d:80, cost:['purple','purple','any']}] },

    // ⚪ 普屬性 (Normal) - 依 HP 排序
    { id: 133, name: '伊布', type: 'normal', hp: 60, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'咬', d:10, cost:['any'], special:'draw_1', desc:'抽 1 張卡'}, {n:'突擊', d:40, cost:['any','any'], special:'plus_dmg_if_status_30', desc:'異常狀態時傷害+30'}] },
    { id: 572, name: '奇諾栗鼠', type: 'normal', hp: 90, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'掃尾拍打', d:20, cost:['any','any'], special:'flip_2_x20', desc:'擲2次幣正面次數x20'}, {n:'幫助', d:40, cost:['any','any','any'], special:'draw_2', desc:'抽 2 張卡'}] },
    { id: 461, name: '馬狃拉', type: 'normal', hp: 100, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'毒爪', d:30, cost:['any'], special:'poison', desc:'必定中毒'}, {n:'暗襲要害', d:70, cost:['any','any']}] },
    { id: 828, name: '狐大盜', type: 'normal', hp: 100, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'偷襲', d:30, cost:['any']}, {n:'大聲咆哮', d:60, cost:['any','any'], special:'enemy_dmg_minus_30', desc:'下回合敵方攻擊-30'}] },
    { id: 820, name: '藏飽栗鼠', type: 'normal', hp: 120, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'咬住', d:30, cost:['any','any']}, {n:'泰山壓頂', d:80, cost:['any','any','any'], special:'paralyze_flip', desc:'正面對手麻痺'}] },
    { id: 612, name: '雙斧戰龍', type: 'normal', hp: 140, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'廣域破壞', d:40, cost:['any','any'], special:'reduce_dmg_taken_20', desc:'下回受傷-20'}, {n:'龍之波動', d:90, cost:['any','any','any']}] },
    { id: 706, name: '黏美龍', type: 'normal', hp: 140, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'水炮', d:50, cost:['any','any']}, {n:'流星群', d:110, cost:['any','any','any'], special:'cant_act_next', desc:'下回合禁攻'}] },
    { id: 197, name: '月亮伊布', type: 'normal', hp: 140, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'大聲咆哮', d:30, cost:['any','any']}, {n:'月色幻想', d:70, cost:['any','any','any'], special:'confuse_flip', desc:'硬幣正面對手混亂'}] },
    { id: 143, name: '卡比獸', type: 'normal', hp: 150, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'扣殺抽出', d:30, cost:['any','any'], special:'draw_1', desc:'抽1張卡'}, {n:'泰山壓頂', d:100, cost:['any','any','any','any'], special:'asleep_self', desc:'使用完自己陷入睡眠'}] },
    { id: 149, name: '快龍', type: 'normal', hp: 150, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'龍爪', d:50, cost:['any','any']}, {n:'流星群', d:70, cost:['any','any','any'], special:'aoe_20', desc:'對手全體後備區受到20傷害'}] },
    { id: 635, name: '三首惡龍', type: 'normal', hp: 150, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'咬住', d:40, cost:['any','any'], special:'paralyze_flip', desc:'硬幣正面對方麻痺'}, {n:'三重攻擊', d:80, cost:['any','any','any'], special:'burn_flip', desc:'硬幣正面對方灼傷'}] },
    { id: 242, name: '幸福蛋', type: 'normal', hp: 180, weakness: 'brown', resistance: {type:'none', val:0}, attacks: [{n:'連環巴掌', d:40, cost:['any','any']}, {n:'歡樂時光', d:30, cost:['any','any'], special:'heal_all_allies_30', desc:'我方全體恢復30HP'}] }
];

const TRAINERS_DB = [
    {id:"potion",name:"傷藥",icon:"💊",desc:"回復一隻寶可夢 30 HP",target:"ally"},
    {id:"super_potion",name:"好傷藥",icon:"🍶",desc:"回復一隻寶可夢 50 HP",target:"ally"},
    {id:"full_heal",name:"萬能藥",icon:"🌿",desc:"解除戰鬥寶可夢所有異常狀態",target:"active_ally"},
    {id:"switch",name:"交替",icon:"🔄",desc:"與後備交換(解除異常狀態)",target:"bench"},
    {id:"energy_search",name:"能量搜索",icon:"🔍",desc:"隨機獲得 2 張能量卡",target:"none"},
    {id:"pokemon_catcher",name:"捕捉器",icon:"🥅",desc:"擲硬幣，正面則強制替換對手戰鬥寶可夢",target:"enemy_bench"}, 
    {id:"rescue_stretcher",name:"擔架",icon:"🚑",desc:"從陣亡區復活一隻寶可夢至後備區(恢復半血)",target:"dead_ally"},
    {id:"boss_orders",name:"老大指令",icon:"📢",desc:"無須擲幣，強制將對手一隻後備寶可夢拖至戰鬥區",target:"enemy_bench"},
    {id:"prof_research",name:"博士研究",icon:"🔬",desc:"捨棄現有手牌，重新抽取 3 張卡",target:"none"},
    {id:"muscle_band",name:"力量頭帶",icon:"💪",desc:"我方戰鬥寶可夢攻擊力+20，持續2回合",target:"active_ally"},
    {id:"focus_sash",name:"氣勢披帶",icon:"🎗",desc:"滿血時若受致命傷，保留10HP不氣絕(觸發後棄置)",target:"active_ally"},
    {id:"full_face_guard",name:"全罩防守",icon:"🛡️",desc:"受傷-20(持續3回合)",target:"ally"},
    {id:"pot_helmet",name:"鍋型頭盔",icon:"🪖",desc:"受傷-40(限最大HP<100，持續2回合)",target:"ally"},
    {id:"mystery_swap", name:"神秘置換", icon:"🎲", desc:"從雲端隨機召喚一隻不在場上的寶可夢，替換我方目標", target:"ally"}
];