const DIMENSIONS = [
    {
      id: "D1",
      name: "风险偏好",
      highCode: "A",
      highLabel: "激进派",
      lowCode: "C",
      lowLabel: "保守派",
      highDesc:
        '你打牌的核心哲学是"进攻就是最好的防守"，筹码不推出去你浑身难受',
      midDesc: "你在激进和保守之间灵活切换，该莽的时候莽，该苟的时候苟",
      lowDesc: '你信奉"留得青山在不怕没柴烧"，打牌讲究的就是一个稳字',
    },
    {
      id: "D2",
      name: "情绪控制",
      highCode: "T",
      highLabel: "钢铁心态",
      lowCode: "E",
      lowLabel: "情绪玩家",
      highDesc:
        "被bad beat十次你脸上依然毫无波澜——可能你心里在骂，但手上的操作不会变",
      midDesc:
        "大部分时候能控制住情绪，但碰到特别离谱的bad beat还是会上头那么一小会儿",
      lowDesc: "你的筹码量和你的情绪曲线高度正相关——赢了是股神，输了是赌狗",
    },
    {
      id: "D3",
      name: "策略风格",
      highCode: "G",
      highLabel: "GTO理论派",
      lowCode: "I",
      lowLabel: "直觉实战派",
      highDesc: "你打牌靠的不是感觉而是公式，每一个bet size背后都有数学依据",
      midDesc: "理论和直觉你都会用，具体看当时的状态和对手——实用主义者一个",
      lowDesc:
        "你打牌靠的是天赋和经验，什么GTO什么solver，你的大脑就是最好的solver",
    },
    {
      id: "D4",
      name: "社交博弈",
      highCode: "R",
      highLabel: "读人高手",
      lowCode: "S",
      lowLabel: "沉默独狼",
      highDesc:
        "你在牌桌上最大的武器不是牌技而是读人——对手的每一个微表情都逃不过你的眼睛",
      midDesc: "偶尔会注意对手的行为模式，但更多时候还是专注于自己的策略",
      lowDesc:
        "你打牌戴着耳机、盯着牌面，跟牌桌上的社交完全绝缘——但你的数据会说话",
    },
    {
      id: "D5",
      name: "牌桌格局",
      highCode: "P",
      highLabel: "职业心态",
      lowCode: "F",
      lowLabel: "娱乐至上",
      highDesc: "你对德扑的态度严肃到像对待一份事业——每一手牌都是一次经营决策",
      midDesc: "你享受德扑但不至于把它当命，在认真和放松之间找到了平衡",
      lowDesc: "你打德扑的核心驱动力就是快乐——赢了锦上添花，输了权当娱乐",
    },
  ],
  QUESTIONS = [
    {
      dim: 0,
      text: "翻牌前拿到AKs（同花AK），你通常——",
      options: [
        { text: "直接3-bet加注，不给对手喘息的机会", score: 2 },
        { text: "看看位置和对手，灵活处理", score: 1 },
        { text: "平跟进去看看翻牌再说，稳一手", score: 0 },
      ],
    },
    {
      dim: 0,
      text: "锦标赛泡沫期（差一点就能进钱圈），你筹码中等偏上，你会？",
      options: [
        { text: "疯狂偷盲注，趁别人怕淘汰使劲压榨", score: 2 },
        { text: "选择性出手，找好的spot打", score: 1 },
        { text: "苟到泡沫破了再说，先保住min cash", score: 0 },
      ],
    },
    {
      dim: 0,
      text: "你更认同哪种打牌哲学？",
      options: [
        { text: "不All-in的人生不值得过", score: 2 },
        { text: "该莽的时候莽，该苟的时候苟", score: 1 },
        { text: "活着就有机会，留得筹码在不怕赢不回来", score: 0 },
      ],
    },
    {
      dim: 0,
      text: "你的筹码量降到了只剩10个大盲注，你——",
      options: [
        { text: "找个还行的牌直接推All-in，死也要站着死", score: 2 },
        { text: "等一手像样的牌再推", score: 1 },
        { text: "继续等最佳时机...虽然可能等不到了", score: 0 },
      ],
    },
    {
      dim: 0,
      text: "你的牌友最可能怎么形容你的风格？",
      options: [
        { text: '"这人不是来打牌的，是来打架的"', score: 2 },
        { text: '"挺稳的，偶尔发一下疯"', score: 1 },
        { text: '"铁Rock一个，打一晚上就玩了三手牌"', score: 0 },
      ],
    },
    {
      dim: 1,
      text: "连续被bad beat（被对手翻盘）三次之后，你通常——",
      options: [
        { text: "内心毫无波动，该怎么打还怎么打", score: 2 },
        { text: "心里骂两句但手上的操作还能控制住", score: 1 },
        { text: "已经上头了，下一手不管拿什么都想打回来", score: 0 },
      ],
    },
    {
      dim: 1,
      text: "你在牌桌上被一个明显的鱼（新手）bluff成功了，你——",
      options: [
        { text: "记住这手牌，等下次机会收割他", score: 2 },
        { text: "有点烦但很快就过去了", score: 1 },
        { text: "当场就想怼回去，不把钱赢回来今晚不走", score: 0 },
      ],
    },
    {
      dim: 1,
      text: "你的bankroll（资金管理）策略是——",
      options: [
        { text: "严格遵守买入法则，绝不越级打牌", score: 2 },
        { text: "大部分时候守规矩，偶尔手感好冲一冲高级别", score: 1 },
        { text: "什么资金管理？赢了就上高级别，输光就下次再来", score: 0 },
      ],
    },
    {
      dim: 1,
      text: "有人在牌桌上对你言语挑衅，你——",
      options: [
        { text: "完全无视，专注打牌，嘴炮影响不了我分毫", score: 2 },
        { text: "偶尔怼一嘴但不影响决策", score: 1 },
        { text: "被激怒了，这把我必须教他做人", score: 0 },
      ],
    },
    {
      dim: 1,
      text: "你的下注习惯中出现频率最高的是——",
      options: [
        { text: "每手都严格按照bet sizing公式来，误差不超过5%", score: 2 },
        { text: "大部分时候有章法，偶尔随心情微调", score: 1 },
        { text: "跟着感觉走，心情好多下点心情差少下点", score: 0 },
      ],
    },
    {
      dim: 2,
      text: "你对GTO（博弈论最优策略）的态度是——",
      options: [
        { text: "这就是终极真理，我在努力向GTO靠拢", score: 2 },
        { text: "知道GTO但打牌主要靠经验和感觉混着来", score: 1 },
        { text: "GTO是什么？能吃吗？我打牌靠的是气势和手感", score: 0 },
      ],
    },
    {
      dim: 2,
      text: "面对一个重大的跟注还是弃牌决定，你主要依赖——",
      options: [
        { text: "底池赔率和对手的范围分析", score: 2 },
        { text: "综合考虑数学计算和牌桌感觉", score: 1 },
        { text: "看对方的表情眼神我就知道该不该跟了", score: 0 },
      ],
    },
    {
      dim: 2,
      text: "关于扑克辅助工具（HUD/Solver），你——",
      options: [
        { text: "必备工具，这是现代德扑的标配", score: 2 },
        { text: "偶尔用用学习一下，不是很依赖", score: 1 },
        { text: "从来不用，靠工具算出来的牌有什么意思", score: 0 },
      ],
    },
    {
      dim: 2,
      text: '关于"读牌"，你更倾向于——',
      options: [
        { text: "建立对手的范围，用排除法一步步缩小可能性", score: 2 },
        { text: "先感觉一下，然后用数学验证直觉", score: 1 },
        { text: "我就是能看出来他有没有牌，玄学解释不了", score: 0 },
      ],
    },
    {
      dim: 2,
      text: "你觉得最能提升牌技的方式是——",
      options: [
        { text: "看训练视频、用solver研究特定spot", score: 2 },
        { text: "和牌友复盘讨论 + 适当看看教程", score: 1 },
        { text: "多打多练，输得多了自然就会了", score: 0 },
      ],
    },
    {
      dim: 3,
      text: "打牌的时候你通常——",
      options: [
        { text: "一直观察每个人的表情、动作和下注节奏", score: 2 },
        { text: "偶尔注意一下对手，更多时间在想自己的策略", score: 1 },
        { text: "戴着耳机听歌，谁跟我说话算谁输", score: 0 },
      ],
    },
    {
      dim: 3,
      text: "在获取信息方面，你更擅长的是——",
      options: [
        { text: "从对手的告知（tell）和行为中获取信息", score: 2 },
        { text: "都还行，看对手类型灵活切换", score: 1 },
        { text: "让对手读不懂我就行，我不需要读他们", score: 0 },
      ],
    },
    {
      dim: 3,
      text: '坐上一张新桌子，你多快开始"建立牌桌形象"？',
      options: [
        { text: "很快，我会主动通过一些操作建立想要的形象", score: 2 },
        { text: "慢慢来，打几手自然就有了", score: 1 },
        { text: "什么牌桌形象？我从来不在乎别人怎么看我打牌", score: 0 },
      ],
    },
    {
      dim: 3,
      text: "关于牌桌上的闲聊，你——",
      options: [
        { text: "喜欢主动套话，通过聊天套取对手信息", score: 2 },
        { text: "偶尔聊几句活跃一下气氛", score: 1 },
        { text: "能不说话就不说话，打牌不是来交朋友的", score: 0 },
      ],
    },
    {
      dim: 3,
      text: '你觉得"牌桌形象管理"这件事——',
      options: [
        { text: "非常重要，我的每一个动作都在传递信息", score: 2 },
        { text: "有一定用处但也没那么玄乎", score: 1 },
        { text: "浪费精力，牌好自然赢，没必要演戏", score: 0 },
      ],
    },
    {
      dim: 4,
      text: "你打德扑最主要的驱动力是——",
      options: [
        { text: "享受跟高手过招的智力博弈快感", score: 2 },
        { text: "既好玩又锻炼思维，一举两得", score: 1 },
        { text: "赢钱的快感——不赢钱打什么牌", score: 0 },
      ],
    },
    {
      dim: 4,
      text: "你学德扑的方式更像——",
      options: [
        { text: "系统性地建立知识体系，从底层逻辑开始学起", score: 2 },
        { text: "碰到不会的就查一查学一学，够用就行", score: 1 },
        { text: "学什么学？直接上桌打就完了，输了就当交学费", score: 0 },
      ],
    },
    {
      dim: 4,
      text: '关于"德扑到底是运气还是技术"的争论，你——',
      options: [
        { text: "100%是技术游戏，短期波动不代表什么", score: 2 },
        { text: "七分技术三分运气吧", score: 1 },
        { text: "你跟我说技术？那解释一下为什么我AK连续撞AA三次", score: 0 },
      ],
    },
    {
      dim: 4,
      text: "你理想中的德扑目标是——",
      options: [
        { text: "成为职业牌手、或者达到职业级别的水准", score: 2 },
        { text: "在朋友圈里打最好就行，偶尔打打锦标赛", score: 1 },
        { text: "能不亏就谢天谢地了，纯粹娱乐", score: 0 },
      ],
    },
    {
      dim: 4,
      text: "输了一个大底池之后，你通常——",
      options: [
        { text: "冷静复盘这手牌的每一步决策", score: 2 },
        { text: "郁闷一会儿但很快振作继续打", score: 1 },
        { text: "从钱包里再掏一份买入费，上一把不算", score: 0 },
      ],
    },
  ],
  MISSION_LEVELS = [
    {
      min: 7,
      badge: "深渊常驻民",
      desc: '你不是在打牌，你是在修行。当别人在为bad beat哭天抢地的时候，你已经在研究下一个spot的EV了。你对德扑的执念已经超越了金钱的范畴——你追求的是"道"。虽然这个"道"暂时还没帮你赚到什么钱，但你知道，时间会站在你这边……大概吧。',
    },
    {
      min: 3,
      badge: "牌桌候鸟",
      desc: "你是德扑世界的候鸟——时而投入时而飘远。朋友叫你就打，没人叫你也能自己快乐地活。你享受德扑但不至于为它疯魔，这种健康的心态在牌圈里算稀有物种了。老实说，你可能是整张桌子上心理最健康的人——当然，这也可能意味着你不够认真。",
    },
    {
      min: 0,
      badge: "快乐送财童子",
      desc: "你打德扑的核心竞争力就是——快乐。赢了开心，输了……好像也没那么不开心。你是每张牌桌上最受欢迎的人（至少鲨鱼们非常欢迎你坐下来）。你的存在让整个牌局的生态系统得以维持。友情提醒：娱乐至上，别把房租输了就行。",
    },
  ],
  TYPES = {
    ATGR: {
      code: "PHANTOM",
      title: "高额桌幽灵",
      subtitle: "The Phantom",
      tagline: "你不是在打牌，你是在狩猎",
      description:
        "你是牌桌上最让人窒息的存在。激进、冷静、精通GTO、还能读人——你基本上就是对手的噩梦本梦。你打牌不为社交不为娱乐，纯粹是来取钱的。你的poker face已经不是扑克脸了，是停尸房标配脸——表情管理好到让人怀疑你是不是一个有感情的人类。坏消息是：你可能已经没有真正的牌友了，因为谁会想跟提款机反着操作？",
      hiddenAttr:
        '你的真正天赋不是牌技，而是"让对手在不知不觉中打出最差的自己"。你上桌的那一刻，方圆三米内的人决策质量自动下降15%。这不是玄学，这是气场碾压。',
      advancedName: "暗影主宰",
      advancedDesc:
        "当你完全开发这个天赋，你将能在不说一句话的情况下控制整张桌子的节奏和走向。你不需要好牌——因为对手会在你的气场压迫下自动犯错、自动送钱。",
    },
    CTGR: {
      code: "G.T.O",
      title: "GTO机器人",
      subtitle: "The Machine",
      tagline: "人类的弱点，我已建模完毕",
      description:
        "你是德扑界的AI威胁。保守到精准、冷静如机器、理论扎实得一批、还能观察人心。你打牌就像在做高考数学压轴题——每一步都有依据，每一个bet size都经过精确计算。你从不为冲动做决策，只为EV做决策。你的对手不是在跟人打牌，是在跟一台额外安装了情感识别模块的solver打牌。唯一的问题是：跟你打牌的人可能觉得还不如跟Siri聊天来得有温度。",
      hiddenAttr:
        '你的隐藏技能是"伪装成鱼"。当你偶尔做出一个看似不合理的play，对手以为你在发癫，其实你在平衡自己的range——这已经是4D chess了。',
      advancedName: "超算牌神",
      advancedDesc:
        "进化完全体的你，能在30秒内完成对手需要用solver跑30分钟才能得出的运算。你就是行走的GTO Wizard，而且不用充会员。",
    },
    CTGS: {
      code: "SHADOW",
      title: "影子猎杀者",
      subtitle: "The Shadow",
      tagline: "安静，是最锋利的武器",
      description:
        '你是牌桌上存在感最低但杀伤力最高的人。保守、冷静、理论扎实，但你懒得跟任何人social。你戴着耳机坐在角落，活像一块石头——但这块石头会在你最放松的时候突然从天而降砸爆你的脑袋。你的打法就是钓鱼：安安静静放好钩子，然后等猎物自己游进来。你座右铭大概是"别人笑我太沉默，我笑别人话太多——然后赢走他们的钱"。',
      hiddenAttr:
        "你的沉默不是性格使然，而是一种高级战术。因为你一旦开口说话，你的牌技和思路会暴露到让对手瞬间调整策略的程度——所以闭嘴才是你最大的伪装。",
      advancedName: "寂灭刀锋",
      advancedDesc:
        "终极形态的你，甚至能让对手忘记你还坐在牌桌上。直到showdown的那一刻，他们才想起来——哦对，这个人赢了今晚80%的大底池。",
    },
    AEIR: {
      code: "ALL-IN",
      title: "All-in教父",
      subtitle: "The Godfather",
      tagline: "人生苦短，直接推了",
      description:
        '你是牌桌上最让人血压飙升的存在。激进到离谱、情绪化打牌、全凭直觉操作——但你居然还会读人？？这让你成了一种极其危险的生物：一个有读心术的赌徒。你的打牌策略只有两个按钮——"fold"和"All-in"，中间的raise对你来说不存在。但偏偏你的直觉时不时能精准猜中对手的底牌。你赢的时候像天才，输的时候像精神病，而你的银行账户永远在坐过山车。',
      hiddenAttr:
        '你的直觉读人能力远超你自己的认知。问题不在于你读不准——在于你读准了之后依然选择All-in，因为你觉得"我知道他有牌但我就是想挑战一下命运"。这叫什么？这叫有信仰。',
      advancedName: "狂暴赌圣",
      advancedDesc:
        "完全体的你就是一个会读心术的亡命徒。对手以为你在蛮干，其实你已经看穿了整张桌子——但你依然选择All-in，因为对你来说，这才是活着的感觉。",
    },
    ATIR: {
      code: "REAPER",
      title: "午夜收割者",
      subtitle: "The Reaper",
      tagline: "天亮之前，请把筹码留下",
      description:
        '你是深夜牌局里最恐怖的收割机。激进、心态铁、靠直觉打牌、还能读人。你在牌桌上的策略用一个字概括就是"杀"。你不需要GTO告诉你该怎么打——你天生就知道什么时候该开枪。你最可怕的地方不是牌技，而是你永远不会tilt。别人被river三次就崩了，你被翻盘十次依然面不改色，然后在第十一手把整桌人清光。深夜三点是你的主场，因为这时候别人犯困你清醒。',
      hiddenAttr:
        "你有一种奇异的体质：越到深夜越清醒，越在逆境中越冷静。凌晨三点的你比下午三点的你强30%——所以你最佳策略就是等对手犯困再出击。你是暗夜里的猎食者。",
      advancedName: "黎明屠夫",
      advancedDesc:
        "终极形态的你是所有深夜局的终结者。当对手们疲惫、焦虑、开始做出低级决策的时候，正是你收割效率最高的时刻。天亮之前，你的任务就是把所有人的筹码搬回自己面前。",
    },
    AEGS: {
      code: "VOID",
      title: "虚空造牌师",
      subtitle: "The Void",
      tagline: "我手里有什么不重要，你信了就行",
      description:
        "你是牌桌上的终极骗术大师。激进、情绪化、有一定的理论基础，但你打牌完全不按套路出牌。你的核心哲学是：底牌是次要的，表演才是主要的。你能拿着27o打出AA的气势，也能拿着AA打出在bluff的感觉。你的对手永远猜不到你在想什么——说实话，有时候你自己也不知道。你最大的敌人不是对手，是你自己那颗随心所欲不受控制的心。",
      hiddenAttr:
        '你天生就有一种"扭曲现实力场"——上了牌桌之后你散发的混乱气息能让方圆五公里内的牌手都开始怀疑自己的判断。连GTO选手碰到你都会开始犯错，因为你的行动线根本不在人类的博弈树里。',
      advancedName: "幻象编织者",
      advancedDesc:
        "完全体的你能构建出如此精密的bluff叙事，以至于对手在被你诈唬成功之后还会真心觉得你那手确实有牌。他们不是输给了你，是输给了你创造的虚拟现实。",
    },
    ATGS: {
      code: "CROWN",
      title: "皇冠猎手",
      subtitle: "The Crown Hunter",
      tagline: "低调是假的，赢你是真的",
      description:
        "你是那种默默无闻但到了年底一看战绩图、全场安静的人。激进打法、钢铁心态、理论扎实——但你不太爱跟人social。你打牌不需要观众、不需要掌声，你只需要对手的筹码。你的风格就像一台精密的收割机器——安静地运转，高效地搬运。别人在牌桌上交朋友，你在牌桌上赚他们交朋友的钱。你的年度profit graph是一条45度角的直线。",
      hiddenAttr:
        '你最强的能力是"注意力自主分配"——你看似只盯着牌面和手机，实际上你的余光早就把每个人的下注模式、timing tell记了个一清二楚。你只是懒得Social，不代表你没在观察。',
      advancedName: "暗夜帝王",
      advancedDesc:
        "终极形态的你能在任何级别的牌桌上实现稳定盈利——从朋友局到高额桌。你不需要名气、不需要赞助商，你的银行账户就是你的冠军奖杯。",
    },
    ATIS: {
      code: "CLUTCH",
      title: "绝境刀客",
      subtitle: "The Clutch",
      tagline: "越绝望，越危险",
      description:
        '你是牌桌上的绝境逆转王。激进、心态稳、靠直觉、不爱说话。你最恐怖的时刻不是筹码多的时候，而是筹码少到只剩几个大盲的时候——这时候你会进入一种"超级赛亚人"模式，翻盘能力直接拉满。你打牌像打格斗游戏：血量越低伤害越高。对手以为你马上就要出局了，结果下一秒你已经double up了。你在锦标赛里永远是最难淘汰的那一个。',
      hiddenAttr:
        '你有一种违反概率学的"绝境之运"——越是背水一战，你摸到的牌越离谱地好。这不是玄学，是因为你在极限压力下的决策质量反而超越了正常状态。别人压力越大越崩，你压力越大越神。',
      advancedName: "不死鸟",
      advancedDesc:
        "完全体的你在任何锦标赛里都是最难被淘汰的那个人。你可以从1个大盲翻到chip leader——而且你已经不是第一次这么干了。对手看到你只剩一点筹码时的表情不是兴奋，是恐惧。",
    },
    CTIR: {
      code: "SOUL",
      title: "灵魂读牌师",
      subtitle: "The Soul Reader",
      tagline: "你的底牌，写在你脸上",
      description:
        "你是牌桌上的人肉测谎仪。保守打法、心态稳定、靠直觉感知、擅长读人——你的核心竞争力不是牌技，是你那近乎超自然的读人能力。你能从对手拿筹码的速度判断他的手牌强度，从他眨眼频率判断他是不是在bluff。你打牌不看牌面看人脸——说实话，你有时候觉得如果把牌面盖起来你可能打得更好。唯一的问题是：你读人太准但打起牌来太保守了，经常读对了却不敢行动。",
      hiddenAttr:
        '你有一种"微表情捕捉雷达"，能在0.1秒内捕捉到对手自己都没意识到的面部肌肉变化。你不是在打扑克，你是在做行为心理学实验——而且你的实验对象还在给你交实验费。',
      advancedName: "心灵窥探者",
      advancedDesc:
        '终极形态的你不需要看任何physical tell——你只需要感受牌桌上的"气氛变化"，就能知道谁强谁弱、谁在演谁在真。你已经超越了读人，进入了"读场"的境界。',
    },
    CTIS: {
      code: "ABYSS",
      title: "深渊陷阱师",
      subtitle: "The Abyss",
      tagline: "请继续往前走，坑已经挖好了",
      description:
        "你是牌桌上最阴险的选手——我说的是褒义词。保守、冷静、直觉型、话少。你的打法就像挖陷阱的猎人：在看似平静的牌面下布满了地雷，等对手兴高采烈地走进来。你最拿手的是慢打大牌——拿到坚果同花顺还能忍住check三条街，等对手自己把筹码一点点推进来。你的对手输完了都不知道从哪一步开始就掉进了你的圈套。",
      hiddenAttr:
        '你最可怕的能力是"延迟满足"。当别人拿到大牌恨不得当场all-in，你却能忍住那股冲动，一条街一条街地慢慢收网。这种耐心，说真的，90%的牌手一辈子都学不会。',
      advancedName: "万丈深渊",
      advancedDesc:
        '完全体的你能构建出跨越五六手牌的"超长线陷阱"——前几手故意输小底池来建立弱势形象，然后在关键一手把对手整个session的盈利一口吞掉。你玩的不是一手牌，你玩的是整场。',
    },
    CEIR: {
      code: "IMMORTAL",
      title: "不朽跟注魂",
      subtitle: "The Immortal Caller",
      tagline: "你加注？我跟。你All-in？还是跟。",
      description:
        '你是每张牌桌上最坚韧也最让人崩溃的存在——永远不弃牌的calling station。保守的整体框架，但内心的好奇心让你永远想看看对手到底有什么牌。你情绪化、靠直觉、还能读人——但你读完人之后的结论永远是"嗯我觉得他在bluff，我跟"。你是bluffer的天敌，也是自己钱包的天敌。好消息：你确实经常抓到bluff。坏消息：你同样经常拿着顶对跟进了对手的葫芦。',
      hiddenAttr:
        '你的"跟注直觉"其实比你以为的准确得多。据不完全统计，你的hero call成功率高达60%——问题是那失败的40%里每一次都是大底池。数学上算下来……我们不算了，你开心就好。',
      advancedName: "永恒守望者",
      advancedDesc:
        '完全体的你把"跟注"这个最简单的动作修炼到了艺术的高度。你的每一次call都精准卡在对手bluff频率的临界点上，成为整张桌子的"反bluff之盾"。Bluffer看到你就头疼。',
    },
    AEIS: {
      code: "WHALE",
      title: "氪金娱乐神",
      subtitle: "The Whale",
      tagline: "赢不赢不重要，开心最重要（但不赢还是挺不开心的）",
      description:
        '说点好听的：你是牌桌上的气氛担当和经济引擎。说难听的：你是鲨鱼们的移动ATM。激进、情绪化、全凭感觉、还不爱跟人互动——你基本上就是一个安静的自动撒钱机器。你打牌的核心驱动力是"爽"，什么GTO什么资金管理在你眼里都是"无趣的人才需要的拐杖"。你的筹码来得快去得更快，而且你从不复盘——因为你觉得"记住输的有什么用"。鲨鱼们真的很喜欢你，发自内心的那种。',
      hiddenAttr:
        '虽然听起来很残酷，但你在牌桌上的真正天赋是"制造混乱"。你那些不合逻辑的play经常能打乱整桌的节奏，连GTO机器人碰到你都会短路。有时候，混乱本身就是一种恐怖的力量——只是这个力量你自己也控制不了。',
      advancedName: "黄金雨之主",
      advancedDesc:
        '完全体的你把"氪金打牌"变成了一种行为艺术。你不在乎输赢，你在乎的是"今晚的牌局因为有我而精彩"——说真的，这也是一种了不起的能力。整个牌桌生态系统因你而繁荣。',
    },
    AEGR: {
      code: "TITAN",
      title: "铁头冲锋队",
      subtitle: "The Titan",
      tagline: "有牌没牌先干一把再说",
      description:
        '你是牌桌上的铁头娃——勇气可嘉，脑子偶尔掉线。激进到让对手心跳加速、情绪化到让自己心跳加速、有一定理论基础（但情绪上来理论就下去了）、还能读人（但读完依然选择正面硬钢）。你的打法总结起来就是：管你拿什么牌，老子先冲了再说。你赢的时候整桌鸦雀无声，输的时候整桌也鸦雀无声——大家都在想"这人是不是忘了自己在打扑克不是在打仗"。',
      hiddenAttr:
        '你的铁头不是无脑冲，而是一种"高压施压战术"。你的持续进攻确实能让保守型选手频繁犯错——问题是你有时候施压到自己都没筹码了还在施压。你需要的不是更多勇气，而是一个刹车片。',
      advancedName: "战场狂牛",
      advancedDesc:
        '完全体的你把"铁头"升级成了可控的爆发力。你知道什么时候该冲什么时候该停——但对手已经被你之前的疯狂形象吓破胆了，所以你停的时候他们以为你在bluff，冲的时候他们以为你有坚果。恐惧本身就是你的武器。',
    },
    CEGS: {
      code: "QUANT",
      title: "量化猎杀者",
      subtitle: "The Quant",
      tagline: "我不需要运气，我有数学",
      description:
        "你是德扑界的量化交易员。保守、有点情绪化（但你会用数学来压制情绪）、理论派、自闭型。你打牌的方式就像在做一道漫长的微积分——每一个决策都要算清期望值才肯动手。你可能是整张桌子上最无聊的人——因为你打得太慢了，每手牌都要在脑子里跑一遍模拟。但你的月度盈利曲线是一条稳步上升的直线——虽然斜率不大，但从不回头。别人的战绩图像心电图，你的像扶梯。",
      hiddenAttr:
        '你的隐藏优势是"情绪数学化"。别人用情绪做决定的时候，你在用公式。当你感到不安时你不会想"我感觉他有牌"，你会算"根据他的弃牌频率和底池赔率，我弃牌的EV为+0.3bb"。你不是冷血，你是理性。',
      advancedName: "概率之主",
      advancedDesc:
        "完全体的你能在20秒内心算出任何spot的近似GTO解。对手以为你在思考人生，其实你在脑内跑蒙特卡洛模拟。你不需要solver，因为你自己就是一个。",
    },
    CEGR: {
      code: "CHAOS",
      title: "混沌支配者",
      subtitle: "The Chaos",
      tagline: "如果我自己都不知道我要干什么，你怎么可能知道？",
      description:
        "你是牌桌上最不可预测的存在。保守、情绪化、有理论基础、能读人——但这些属性组合在一身产生了奇妙的化学反应：你的打法完全没有规律。你这手可能紧到只玩AA-KK，下一手可能用36o发动进攻。你有时候按GTO打，有时候按心情打，有时候看今天星座运势打。对手试图给你建模，结果发现所需参数比预测天气还多。你就像薛定谔的猫——没开牌之前，没人知道你是紧是松。",
      hiddenAttr:
        '你的"混沌"不是缺点，是一种被低估的天赋。"不可预测性"本身就是一种极强的策略优势——GTO solver算不出你的范围，因为你自己都不知道自己的范围是什么。当你的对手放弃给你分类的那一刻，你就已经赢了一半。',
      advancedName: "熵增之王",
      advancedDesc:
        '完全体的你把"不可预测"提升到了艺术的高度。你在"有章法"和"纯随机"之间以量子态存在——观察你的人永远只能看到你的一个侧面，而真实的你是所有可能性的叠加态。你不是在打扑克，你是在表演量子力学。',
    },
    CEIS: {
      code: "IMMORTAL",
      title: "不朽跟注魂",
      subtitle: "The Immortal Caller",
      tagline: "你加注？我跟。你All-in？还是跟。",
      description:
        '你是每张牌桌上最坚韧也最让人崩溃的存在——永远不弃牌的calling station。保守的整体框架，但内心的好奇心让你永远想看看对手到底有什么牌。你情绪化、靠直觉、还能读人——但你读完人之后的结论永远是"嗯我觉得他在bluff，我跟"。你是bluffer的天敌，也是自己钱包的天敌。好消息：你确实经常抓到bluff。坏消息：你同样经常拿着顶对跟进了对手的葫芦。',
      hiddenAttr:
        '你的"跟注直觉"其实比你以为的准确得多。据不完全统计，你的hero call成功率高达60%——问题是那失败的40%里每一次都是大底池。数学上算下来……我们不算了，你开心就好。',
      advancedName: "永恒守望者",
      advancedDesc:
        '完全体的你把"跟注"这个最简单的动作修炼到了艺术的高度。你的每一次call都精准卡在对手bluff频率的临界点上，成为整张桌子的"反bluff之盾"。Bluffer看到你就头疼。',
    },
  };
let currentQuestion = 0,
  answers = new Array(QUESTIONS.length).fill(null);
const $ = (e) => document.getElementById(e),
  screens = {
    intro: $("screen-intro"),
    test: $("screen-test"),
    result: $("screen-result"),
  };
function showScreen(e) {
  (Object.values(screens).forEach((e) => e.classList.remove("active")),
    screens[e].classList.add("active"),
    window.scrollTo({ top: 0, behavior: "smooth" }));
}
function renderQuestion() {
  const e = QUESTIONS[currentQuestion];
  (($("q-number").textContent = `Q${currentQuestion + 1}`),
    ($("q-text").textContent = e.text));
  const t = $("q-options");
  t.innerHTML = "";
  const n = ["A", "B", "C"];
  e.options.forEach((e, i) => {
    const o = document.createElement("div");
    ((o.className =
      "option" + (answers[currentQuestion] === i ? " selected" : "")),
      (o.innerHTML = `\n      <div class="option-radio"></div>\n      <div class="option-text">${n[i]}. ${e.text}</div>\n    `),
      o.addEventListener("click", () => selectOption(i)),
      t.appendChild(o));
  });
  const i = ((currentQuestion + 1) / QUESTIONS.length) * 100;
  (($("progress-fill").style.width = i + "%"),
    ($("progress-text").textContent =
      `${currentQuestion + 1} / ${QUESTIONS.length}`),
    ($("btn-prev").disabled = 0 === currentQuestion),
    ($("btn-next").disabled = null === answers[currentQuestion]),
    ($("btn-next").textContent =
      currentQuestion === QUESTIONS.length - 1 ? "查看结果 ♠" : "下一题 →"));
  const o = $("question-card");
  ((o.style.animation = "none"),
    o.offsetHeight,
    (o.style.animation = "fadeIn 0.25s ease"));
}
function selectOption(e) {
  ((answers[currentQuestion] = e), renderQuestion());
}
function calculateResult() {
  const e = new Array(5).fill(0);
  QUESTIONS.forEach((t, n) => {
    null !== answers[n] && (e[t.dim] += t.options[answers[n]].score);
  });
  let t = "";
  const n = [];
  for (let i = 0; i < 4; i++) {
    const o = DIMENSIONS[i],
      s = e[i],
      l = 10,
      r = s >= 6;
    let a;
    ((t += r ? o.highCode : o.lowCode),
      (a = s >= 7 ? o.highDesc : s <= 3 ? o.lowDesc : o.midDesc),
      n.push({
        name: o.name,
        score: s,
        maxScore: l,
        level: r ? o.highLabel : o.lowLabel,
        code: r ? o.highCode : o.lowCode,
        desc: a,
      }));
  }
  const i = e[4],
    o = DIMENSIONS[4];
  let s;
  ((s = i >= 7 ? o.highDesc : i <= 3 ? o.lowDesc : o.midDesc),
    n.push({
      name: o.name,
      score: i,
      maxScore: 10,
      level: i >= 6 ? o.highLabel : i <= 4 ? o.lowLabel : "进退自如",
      code: i >= 6 ? o.highCode : i <= 4 ? o.lowCode : "~",
      desc: s,
    }));
  const l = MISSION_LEVELS.find((e) => i >= e.min);
  return {
    type: TYPES[t] || TYPES.CEIR,
    typeCode: t,
    dimResults: n,
    mission: l,
    dimScores: e,
  };
}
function renderResult(e) {
  const { type: t, dimResults: n, mission: i } = e;
  (($("result-badge").textContent = i.badge),
    ($("result-code").textContent = t.code),
    ($("result-title").textContent = t.title),
    ($("result-subtitle").textContent = t.subtitle),
    ($("result-tagline").textContent = `「${t.tagline}」`));
  const o = e.dimScores.slice(0, 4).reduce((e, t) => e + Math.abs(t - 5), 0),
    s = Math.min(98, 72 + Math.round(1.8 * o));
  (($("result-match").textContent = `♠ 牌桌匹配度 ${s}%`),
    ($("result-description").textContent = t.description));
  const l = $("dimensions-grid");
  ((l.innerHTML = ""),
    n.forEach((e) => {
      const t = (e.score / e.maxScore) * 100,
        n = document.createElement("div");
      ((n.className = "dim-item"),
        (n.innerHTML = `\n      <div class="dim-header">\n        <span class="dim-name">${e.name}</span>\n        <span class="dim-level">${e.level} · ${e.score}/${e.maxScore}</span>\n      </div>\n      <div class="dim-bar-bg"><div class="dim-bar-fill" style="width:${t}%"></div></div>\n      <div class="dim-desc">${e.desc}</div>\n    `),
        l.appendChild(n));
    }),
    ($("mission-card").innerHTML =
      `\n    <div class="mission-badge">${i.badge}</div>\n    <div class="mission-text">${i.desc}</div>\n  `),
    ($("hidden-attr-text").textContent = t.hiddenAttr),
    ($("advanced-name").textContent = t.advancedName),
    ($("advanced-desc").textContent = t.advancedDesc),
    ($("unlock-locked").style.display = "block"),
    ($("unlock-content").style.display = "none"),
    $("unlock-content").classList.remove("revealed"));
}
function handleUnlock() {
  confirm(
    "【广告位预留】\n\n实际上线后，此处将播放一段15-30秒的激励视频广告。\n\n现在点击「确定」直接解锁预览效果。",
  ) && doUnlock();
}
function doUnlock() {
  $("unlock-locked").style.display = "none";
  const e = $("unlock-content");
  ((e.style.display = "block"), e.classList.add("revealed"));
}
function generateShareImage(e) {
  const t = $("share-canvas"),
    n = t.getContext("2d"),
    i = 750,
    o = 1334;
  ((t.width = i), (t.height = o));
  const { type: s, mission: l, dimResults: r } = e,
    a = n.createLinearGradient(0, 0, 0, o);
  (a.addColorStop(0, "#f4f8f5"),
    a.addColorStop(0.5, "#eaf2eb"),
    a.addColorStop(1, "#e2ede4"),
    (n.fillStyle = a),
    n.fillRect(0, 0, i, o),
    n.beginPath(),
    n.arc(690, 80, 160, 0, 2 * Math.PI));
  const d = n.createRadialGradient(690, 80, 0, 690, 80, 160);
  (d.addColorStop(0, "rgba(91,140,101,0.1)"),
    d.addColorStop(1, "rgba(91,140,101,0.01)"),
    (n.fillStyle = d),
    n.fill(),
    (n.fillStyle = "#4d6a53"),
    (n.font = '700 28px "PingFang SC", "Microsoft YaHei", sans-serif'),
    (n.textAlign = "center"),
    n.fillText("Poker SBTI", 375, 70),
    (n.strokeStyle = "rgba(77,106,83,0.25)"),
    (n.lineWidth = 1),
    n.beginPath(),
    n.moveTo(100, 100),
    n.lineTo(650, 100),
    n.stroke(),
    (n.fillStyle = "rgba(91,140,101,0.12)"),
    roundRect(n, 295, 130, 160, 32, 16),
    n.fill(),
    (n.fillStyle = "#5b8c65"),
    (n.font = '700 16px "PingFang SC", "Microsoft YaHei", sans-serif'),
    n.fillText(l.badge, 375, 152),
    (n.fillStyle = "#4d6a53"),
    (n.font = '900 64px "PingFang SC", "Microsoft YaHei", sans-serif'),
    n.fillText(s.code, 375, 238),
    (n.fillStyle = "#1e2a22"),
    (n.font = '800 40px "PingFang SC", "Microsoft YaHei", sans-serif'),
    n.fillText(s.title, 375, 296),
    (n.fillStyle = "#8a9e8f"),
    (n.font = '500 18px "PingFang SC", "Microsoft YaHei", sans-serif'),
    n.fillText(s.subtitle, 375, 330),
    (n.fillStyle = "#4a5e4f"),
    (n.font = '600 22px "PingFang SC", "Microsoft YaHei", sans-serif'),
    n.fillText("「" + s.tagline + "」", 375, 380),
    (n.fillStyle = "#ffffff"),
    roundRect(n, 40, 420, 670, 260, 18),
    n.fill(),
    (n.strokeStyle = "rgba(77,106,83,0.1)"),
    (n.lineWidth = 1),
    roundRect(n, 40, 420, 670, 260, 18),
    n.stroke(),
    (n.fillStyle = "#4a5e4f"),
    (n.font = '500 18px "PingFang SC", "Microsoft YaHei", sans-serif'),
    (n.textAlign = "left"),
    wrapText(n, s.description, 70, 460, 610, 28),
    (n.textAlign = "center"),
    (n.fillStyle = "#4d6a53"),
    (n.font = '700 22px "PingFang SC", "Microsoft YaHei", sans-serif'),
    n.fillText("♠ 五维牌手画像", 375, 730));
  r.forEach((e, t) => {
    const i = 760 + 70 * t;
    ((n.textAlign = "left"),
      (n.fillStyle = "#1e2a22"),
      (n.font = '700 17px "PingFang SC", "Microsoft YaHei", sans-serif'),
      n.fillText(e.name, 60, i + 14),
      (n.textAlign = "right"),
      (n.fillStyle = "#4d6a53"),
      (n.font = '800 16px "PingFang SC", "Microsoft YaHei", sans-serif'),
      n.fillText(e.level + " · " + e.score + "/" + e.maxScore, 690, i + 14),
      (n.fillStyle = "#eaf2eb"),
      roundRect(n, 60, i + 24, 630, 10, 5),
      n.fill());
    const o = Math.max(4, (e.score / e.maxScore) * 630),
      s = n.createLinearGradient(60, 0, 60 + o, 0);
    (s.addColorStop(0, "#5b8c65"),
      s.addColorStop(1, "#4d6a53"),
      (n.fillStyle = s),
      roundRect(n, 60, i + 24, o, 10, 5),
      n.fill());
  });
  const c = 1154;
  ((n.fillStyle = "rgba(77,106,83,0.08)"),
    roundRect(n, 60, c, 630, 80, 16),
    n.fill(),
    (n.strokeStyle = "rgba(77,106,83,0.15)"),
    roundRect(n, 60, c, 630, 80, 16),
    n.stroke(),
    (n.textAlign = "center"),
    (n.fillStyle = "#4d6a53"),
    (n.font = '700 20px "PingFang SC", "Microsoft YaHei", sans-serif'),
    n.fillText("你在牌桌上是什么身份？", 375, 1189),
    (n.fillStyle = "#8a9e8f"),
    (n.font = '500 16px "PingFang SC", "Microsoft YaHei", sans-serif'),
    n.fillText("扫码或长按识别，生成你的 Poker SBTI 牌桌身份", 375, 1216),
    (n.fillStyle = "#b0c4b5"),
    (n.font = '400 13px "PingFang SC", "Microsoft YaHei", sans-serif'),
    n.fillText("本测试仅供娱乐，不代表真实牌技水平", 375, 1284),
    n.fillText("Poker SBTI - 德州扑克身份测试", 375, 1304));
  const p = t.toDataURL("image/png");
  (($("share-img").src = p), ($("share-modal").style.display = "flex"));
}
function roundRect(e, t, n, i, o, s) {
  (e.beginPath(),
    e.moveTo(t + s, n),
    e.lineTo(t + i - s, n),
    e.quadraticCurveTo(t + i, n, t + i, n + s),
    e.lineTo(t + i, n + o - s),
    e.quadraticCurveTo(t + i, n + o, t + i - s, n + o),
    e.lineTo(t + s, n + o),
    e.quadraticCurveTo(t, n + o, t, n + o - s),
    e.lineTo(t, n + s),
    e.quadraticCurveTo(t, n, t + s, n),
    e.closePath());
}
function wrapText(e, t, n, i, o, s) {
  let l = "",
    r = i;
  for (let i = 0; i < t.length; i++) {
    const a = l + t[i];
    e.measureText(a).width > o && l.length > 0
      ? (e.fillText(l, n, r), (l = t[i]), (r += s))
      : (l = a);
  }
  l && e.fillText(l, n, r);
}
const tracker = {
  _key: "dp_analytics",
  _getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key) || "{}");
    } catch (e) {
      return {};
    }
  },
  _save(e) {
    try {
      localStorage.setItem(this._key, JSON.stringify(e));
    } catch (e) {}
  },
  track(e, t) {
    const n = this._getAll(),
      i = new Date().toISOString().slice(0, 10);
    (n.daily || (n.daily = {}),
      n.daily[i] ||
        (n.daily[i] = {
          pv: 0,
          uv: 0,
          starts: 0,
          completes: 0,
          ad_clicks: 0,
          shares: 0,
          retests: 0,
        }));
    const o = n.daily[i];
    ("page_view" === e &&
      (o.pv++, (n._todayUV && n._todayUV === i) || (o.uv++, (n._todayUV = i))),
      "test_start" === e && o.starts++,
      "test_complete" === e && o.completes++,
      "ad_click" === e && o.ad_clicks++,
      "share_click" === e && o.shares++,
      "retest" === e && o.retests++,
      "test_complete" === e &&
        t &&
        t.type &&
        (n.types || (n.types = {}),
        (n.types[t.type] = (n.types[t.type] || 0) + 1)),
      n.totals ||
        (n.totals = {
          pv: 0,
          starts: 0,
          completes: 0,
          ad_clicks: 0,
          shares: 0,
        }),
      "page_view" === e && n.totals.pv++,
      "test_start" === e && n.totals.starts++,
      "test_complete" === e && n.totals.completes++,
      "ad_click" === e && n.totals.ad_clicks++,
      "share_click" === e && n.totals.shares++,
      n.events || (n.events = []),
      n.events.push({ e: e, t: Date.now(), x: t || null }),
      n.events.length > 100 && (n.events = n.events.slice(-100)),
      this._save(n));
  },
  getData() {
    return this._getAll();
  },
  export() {
    return JSON.stringify(this._getAll(), null, 2);
  },
  reset() {
    localStorage.removeItem(this._key);
  },
};
function checkAdminPanel() {
  if ("#data" !== location.hash) return;
  const e = tracker.getData(),
    t = e.totals || {},
    n = e.types || {},
    i = e.daily || {},
    o = t.pv ? ((t.starts / t.pv) * 100).toFixed(1) : "0",
    s = t.starts ? ((t.completes / t.starts) * 100).toFixed(1) : "0",
    l = t.completes ? ((t.ad_clicks / t.completes) * 100).toFixed(1) : "0",
    r = t.completes ? ((t.shares / t.completes) * 100).toFixed(1) : "0",
    a = Object.entries(n).sort((e, t) => t[1] - e[1]),
    d = a.reduce((e, t) => e + t[1], 0),
    c = Object.keys(i).sort().slice(-7);
  const p = `\n    <div style="position:fixed;inset:0;background:rgba(30,42,34,0.95);z-index:9999;overflow-y:auto;padding:20px;color:#e8e0f0;font-family:-apple-system,sans-serif;">\n      <div style="max-width:500px;margin:0 auto;">\n        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">\n          <h2 style="color:#5b8c65;font-size:20px;margin:0;">📊 Poker SBTI · 数据后台</h2>\n          <button onclick="location.hash='';document.getElementById('admin-panel').remove();" style="background:#2a3d2e;border:1px solid #4a5e4f;color:#b0c4b5;padding:6px 14px;border-radius:8px;cursor:pointer;font-size:14px;">✕ 关闭</button>\n        </div>\n\n        <div style="background:#1e2a22;border:1px solid #2a3d2e;border-radius:14px;padding:16px;margin-bottom:12px;">\n          <h3 style="color:#5b8c65;font-size:15px;margin:0 0 12px;">♠ 核心漏斗</h3>\n          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">\n            <div style="background:#243028;border-radius:10px;padding:12px;text-align:center;">\n              <div style="font-size:24px;font-weight:900;color:#5b8c65;">${t.pv || 0}</div>\n              <div style="font-size:11px;color:#8a9e8f;margin-top:4px;">总访问 PV</div>\n            </div>\n            <div style="background:#243028;border-radius:10px;padding:12px;text-align:center;">\n              <div style="font-size:24px;font-weight:900;color:#7ab886;">${t.starts || 0}</div>\n              <div style="font-size:11px;color:#8a9e8f;margin-top:4px;">开始测试 (${o}%)</div>\n            </div>\n            <div style="background:#243028;border-radius:10px;padding:12px;text-align:center;">\n              <div style="font-size:24px;font-weight:900;color:#5b8c65;">${t.completes || 0}</div>\n              <div style="font-size:11px;color:#8a9e8f;margin-top:4px;">完成测试 (${s}%)</div>\n            </div>\n            <div style="background:#243028;border-radius:10px;padding:12px;text-align:center;">\n              <div style="font-size:24px;font-weight:900;color:#7ab886;">${t.ad_clicks || 0}</div>\n              <div style="font-size:11px;color:#8a9e8f;margin-top:4px;">广告点击 (${l}%)</div>\n            </div>\n          </div>\n          <div style="display:grid;grid-template-columns:1fr;gap:10px;margin-top:10px;">\n            <div style="background:#243028;border-radius:10px;padding:12px;text-align:center;">\n              <div style="font-size:24px;font-weight:900;color:#5b8c65;">${t.shares || 0}</div>\n              <div style="font-size:11px;color:#8a9e8f;margin-top:4px;">生成分享卡片 (${r}%)</div>\n            </div>\n          </div>\n        </div>\n\n        <div style="background:#1e2a22;border:1px solid #2a3d2e;border-radius:14px;padding:16px;margin-bottom:12px;">\n          <h3 style="color:#5b8c65;font-size:15px;margin:0 0 12px;">♣ 身份类型分布 TOP</h3>\n          ${
      0 === a.length
        ? '<div style="color:#8a9e8f;font-size:13px;">暂无数据</div>'
        : a
            .map(([e, t], n) => {
              const i = ((t / d) * 100).toFixed(1),
                o = (function (e) {
                  for (const t in TYPES)
                    if (TYPES[t].code === e || t === e) return TYPES[t].title;
                  return e;
                })(e);
              return (
                '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:#8a9e8f;font-size:12px;width:18px;">' +
                (n + 1) +
                '</span><span style="color:#e8e0f0;font-size:13px;font-weight:700;width:100px;">' +
                o +
                '</span><div style="flex:1;height:8px;background:#243028;border-radius:4px;overflow:hidden;"><div style="height:100%;background:linear-gradient(90deg,#5b8c65,#4d6a53);border-radius:4px;width:' +
                i +
                '%;"></div></div><span style="color:#5b8c65;font-size:12px;font-weight:700;width:60px;text-align:right;">' +
                t +
                " (" +
                i +
                "%)</span></div>"
              );
            })
            .join("")
    }\n        </div>\n\n        <div style="background:#1e2a22;border:1px solid #2a3d2e;border-radius:14px;padding:16px;margin-bottom:12px;">\n          <h3 style="color:#5b8c65;font-size:15px;margin:0 0 12px;">📅 近7日趋势</h3>\n          ${
      0 === c.length
        ? '<div style="color:#8a9e8f;font-size:13px;">暂无数据</div>'
        : '<div style="font-size:12px;color:#8a9e8f;display:grid;grid-template-columns:80px repeat(4,1fr);gap:4px;margin-bottom:6px;"><div>日期</div><div>PV</div><div>开始</div><div>完成</div><div>广告</div></div>' +
          c
            .map((e) => {
              const t = i[e];
              return (
                '<div style="font-size:13px;display:grid;grid-template-columns:80px repeat(4,1fr);gap:4px;padding:4px 0;border-top:1px solid #2a3d2e;"><div style="color:#b0c4b5;">' +
                e.slice(5) +
                '</div><div style="color:#5b8c65;font-weight:700;">' +
                t.pv +
                '</div><div style="color:#e8e0f0;">' +
                t.starts +
                '</div><div style="color:#e8e0f0;">' +
                t.completes +
                '</div><div style="color:#7ab886;">' +
                t.ad_clicks +
                "</div></div>"
              );
            })
            .join("")
    }\n        </div>\n\n        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">\n          <button onclick="navigator.clipboard.writeText(tracker.export()).then(()=>alert('已复制到剪贴板'))" style="background:#2a3d2e;border:1px solid #4a5e4f;color:#b0c4b5;padding:10px;border-radius:10px;cursor:pointer;font-size:13px;">📋 导出数据JSON</button>\n          <button onclick="if(confirm('确定清空所有数据？')){tracker.reset();location.hash='';document.getElementById('admin-panel').remove();}" style="background:#2a3d2e;border:1px solid #4a5e4f;color:#b0c4b5;padding:10px;border-radius:10px;cursor:pointer;font-size:13px;">🗑️ 清空数据</button>\n        </div>\n\n        <div style="color:#4a5e4f;font-size:11px;text-align:center;margin-top:16px;">\n          数据存储于本设备 localStorage · 换设备/清缓存会丢失<br>\n          如需跨设备汇总，请查看51.la后台\n        </div>\n      </div>\n    </div>\n  `,
    x = document.getElementById("admin-panel");
  x && x.remove();
  const f = document.createElement("div");
  ((f.id = "admin-panel"), (f.innerHTML = p), document.body.appendChild(f));
}
let currentResult = null;
document.addEventListener("DOMContentLoaded", () => {
  ($("btn-start").addEventListener("click", () => {
    ((currentQuestion = 0),
      (answers = new Array(QUESTIONS.length).fill(null)),
      showScreen("test"),
      renderQuestion(),
      tracker.track("test_start"));
  }),
    $("btn-prev").addEventListener("click", () => {
      currentQuestion > 0 && (currentQuestion--, renderQuestion());
    }),
    $("btn-next").addEventListener("click", () => {
      null !== answers[currentQuestion] &&
        (currentQuestion < QUESTIONS.length - 1
          ? (currentQuestion++, renderQuestion())
          : ((currentResult = calculateResult()),
            renderResult(currentResult),
            showScreen("result"),
            tracker.track("test_complete", {
              type: currentResult.typeCode,
              title: currentResult.type.title,
            })));
    }),
    $("btn-unlock").addEventListener("click", () => {
      (tracker.track("ad_click"), handleUnlock());
    }),
    $("btn-share").addEventListener("click", () => {
      currentResult &&
        (tracker.track("share_click", { type: currentResult.typeCode }),
        generateShareImage(currentResult));
    }),
    $("modal-close").addEventListener("click", () => {
      $("share-modal").style.display = "none";
    }),
    $("share-modal").addEventListener("click", (e) => {
      e.target === $("share-modal") &&
        ($("share-modal").style.display = "none");
    }),
    $("btn-retest").addEventListener("click", () => {
      ((currentQuestion = 0),
        (answers = new Array(QUESTIONS.length).fill(null)),
        (currentResult = null),
        tracker.track("retest"),
        showScreen("intro"));
    }),
    tracker.track("page_view"),
    window.addEventListener("hashchange", checkAdminPanel),
    checkAdminPanel());
});
