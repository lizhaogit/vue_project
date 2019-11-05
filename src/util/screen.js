const screen = {

    //经营状态
    manage: [{text: '开业', value: '1'}, {text: '存续', value: '2'}, {text: '在业', value: '3'}, {
      text: '在营',
      value: '4'
    }, {text: '吊销', value: '5'}, {text: '注销', value: '6'}, {text: '停业', value: '7'}, {text: '清算', value: '8'}],
    //注册资本
    regCapital: [{text: '0-100万', value: '0-100'}, {text: '100万-200万', value: '100-200'}, {
      text: '200万-500万',
      value: '200-500'
    }, {text: '500万-1000万', value: '500-1000'}, {text: '1000万-5000万', value: '1000-5000'}, {
      text: '5000万以上',
      value: '5000-*'
    }],
    //存续年限
    subsist: [{text: '成立1年内', value: '成立1年内'}, {text: '成立1-5年', value: '成立1-5年'}, {
      text: '成立5-10年',
      value: '成立5-10年'
    }, {text: '成立10-15年', value: '成立10-15年'}, {text: '成立15年以上', value: '成立15年以上'}],
    //公司类型
    companyType: [{text: '有限责任公司', value: '1'}, {text: '股份有限公司', value: '2'}, {
      text: '集体所有制',
      value: '3'
    }, {text: '国有企业', value: '4'}, {text: '个体工商户', value: '5'}, {text: '个人独资企业', value: '6'}, {
      text: '有限合伙',
      value: '7'
    }, {text: '普通合伙', value: '8'}, {text: '外商投资企业', value: '9'}, {text: '港澳台', value: '10'}, {
      text: '联营企业',
      value: '11'
    }, {text: '私营企业', value: '12'}],
    //联系方式
    contact: [{text: '有联系方式', value: '有联系方式'}, {text: '无联系方式', value: '无联系方式'}],
    //电子邮箱
    email: [{text: '有电子邮箱', value: '有电子邮箱'}, {text: '无电子邮箱', value: '无电子邮箱'}],
    //企业网址
    website: [{text: '有网址信息', value: '有网址信息'}, {text: '无网址信息', value: '无网址信息'}],
    //失信信息
    breakfaith: [{text: '有失信记录', value: '有失信记录'}, {text: '无失信记录', value: '无失信记录'}],
    //商标信息
    trademark: [{text: '有商标信息', value: '有商标信息'}, {text: '无商标信息', value: '无商标信息'}],
    //资质信息
    qualifications: [{text: '有特殊资质', value: '有特殊资质'}, {text: '无特殊资质', value: '无特殊资质'}],
    //专利信息
    patent: [{text: '有专利信息', value: '有专利信息'}, {text: '无专利信息', value: '无专利信息'}],
    //融资信息
    financing: [{text: '有融资记录', value: '有融资记录'}, {text: '无融资记录', value: '无融资记录'}],
    //进出口信息
    importexport: [{text: '有进出口许可', value: '有进出口许可'}, {text: '无进出口许可', value: '无进出口许可'}],
    //动产抵押
    chattelmortgage: [{text: '有动产抵押记录', value: '有动产抵押记录'}, {text: '无动产抵押记录', value: '无动产抵押记录'}],
    //审计状态
    auditstatus: [{text: '未审计', value: '未审计'}, {text: '已有审计报告', value: '已有审计报告'}, {text: '审计经平台认证', value: '审计经平台认证'}],
    //认证状态
    attestation: [{text: '经平台认证', value: '经平台认证'}, {text: '未经平台认证', value: '未经平台认证'}],
    //证件类型
    idType: [{label: '居民身份证', value: '1'}, {label: '其他', value: '2'}],
    //性别
    gender: [{label: '女', value: '0'}, {label: '男', value: '1'}],
    //民族
    nation: [{label: '汉族', value: '汉族'}, {label: '回族', value: '回族'}, {label: '蒙古族', value: '蒙古族'}, {
      label: '满族',
      value: '满族'
    }, {label: '朝鲜族', value: '朝鲜族'}
      , {label: '赫哲族', value: '赫哲族'}, {label: '达斡尔族', value: '达斡尔族'}, {label: '鄂温克族', value: '鄂温克族'}, {
        label: '鄂伦春族',
        value: '鄂伦春族'
      }
      , {label: '东乡族', value: '东乡族'}, {label: '土族', value: '土族'}, {label: '撒拉族', value: '撒拉族'}, {
        label: '保安族',
        value: '保安族'
      }
      , {label: '裕固族', value: '裕固族'}, {label: '维吾尔族', value: '维吾尔族'}, {label: '哈萨克族', value: '哈萨克族'}, {
        label: '柯尔克孜族',
        value: '柯尔克孜族'
      }, {label: '锡伯族', value: '锡伯族'}
      , {label: '塔吉克族', value: '塔吉克族'}, {label: '乌孜别克族', value: '乌孜别克族'}, {label: '俄罗斯族', value: '俄罗斯族'}, {
        label: '塔塔尔族',
        value: '塔塔尔族'
      }, {label: '藏族', value: '藏族'}
      , {label: '门巴族', value: '门巴族'}, {label: '珞巴族', value: '珞巴族'}, {label: '羌族', value: '羌族'}, {
        label: '彝族',
        value: '彝族'
      }, {label: '白族', value: '白族'}
      , {label: '哈尼族', value: '哈尼族'}, {label: '傣族', value: '傣族'}, {label: '僳僳族', value: '僳僳族'}, {
        label: '佤族',
        value: '佤族'
      }, {label: '拉祜族', value: '拉祜族'}
      , {label: '纳西族', value: '纳西族'}, {label: '景颇族', value: '景颇族'}, {label: '布朗族', value: '布朗族'}, {
        label: '阿昌族',
        value: '阿昌族'
      }, {label: '普米族', value: '普米族'}
      , {label: '怒族', value: '怒族'}, {label: '德昂族', value: '德昂族'}, {label: '独龙族', value: '独龙族'}, {
        label: '基诺族',
        value: '基诺族'
      }, {label: '苗族', value: '苗族'}, {label: '布依族', value: '布依族'}, {label: '侗族', value: '侗族'}, {
        label: '水族',
        value: '水族'
      }, {label: '仡佬族', value: '仡佬族'}, {label: '壮族', value: '壮族'}, {label: '瑶族', value: '瑶族'}, {
        label: '仫佬族',
        value: '仫佬族'
      }, {label: '毛南族', value: '毛南族'}, {label: '京族', value: '京族'}, {label: '土家族', value: '土家族'}, {
        label: '黎族',
        value: '黎族'
      }, {label: '畲族', value: '畲族'}, {label: '高山族', value: '高山族'}],
    //政治面貌
    political_outlook: [{label: '群众', value: '群众'}, {label: '共产党员', value: '共产党员'}, {
      label: '中共预备党员',
      value: '中共预备党员'
    }, {label: '共青团员', value: '共青团员'}, {label: '民革党员', value: '民革党员'}, {label: '民盟盟员', value: '民盟盟员'}, {
      label: '民建会员',
      value: '民建会员'
    }, {label: '民进会员', value: '民进会员'}, {label: '农工党党员', value: '农工党党员'}, {
      label: '致公党党员',
      value: '致公党党员'
    }, {label: '九三学社社员', value: '九三学社社员'}, {label: '台盟盟员', value: '台盟盟员'}, {label: '无党派人士', value: '无党派人士'}],
    //婚姻状况
    maritalStatus: [{label: '未婚', value: '未婚'}, {label: '已婚', value: '已婚'}, {label: '丧偶', value: '丧偶'}, {
      label: '离婚',
      value: '离婚'
    }, {label: '再婚', value: '再婚'}],
    //学历
    education: [{label: '初中', value: '0'}, {label: '高中', value: '1'}, {label: '中专', value: '2'}, {
      label: '大专',
      value: '3'
    }, {label: '本科', value: '4'}, {label: '硕士研究生', value: '5'}, {label: '博士研究生', value: '6'}],
    //学位
    academicDegree: [{label: '学士', value: '7'}, {label: '硕士', value: '8'}, {label: '博士', value: '9'}],
    //所有权
    ownership: [{label: '租用', value: '租用'}, {label: '自用', value: '自用'}],
    //标准定制标准等级
    standard_grade: [{label: '国家', value: '1'}, {label: '行业', value: '2'}, {label: '地方', value: '3'}, {
      label: '团体',
      value: '4'
    }, {label: '国际', value: '5'}, {label: '国外', value: '6'}],
    //标准定制参与角色
    participate_role: [{label: '主编', value: '1'}, {label: '参编', value: '2'}],
    //是否
    whether: [{label: '否', value: '0'}, {label: '是', value: '1'}],
    //年薪
    annualSalary: [{label: '10万以下', value: '10万以下'}, {label: '10万-15万', value: '10万-15万'}, {
      label: '15万-25万',
      value: '15万-25万'
    }, {label: '25万-35万', value: '25万-35万'}, {label: '35万-50万', value: '35万-50万'}, {
      label: '50万-70万',
      value: '50万-70万'
    }, {label: '70万-100万', value: '70万-100万'}, {label: '100万以上', value: '100万以上'}],
    //月薪
    monthlySalary: [{label: '1k以下', value: '1k以下'}, {label: '1k-2k', value: '1k-2k'}, {
      label: '2k-4k',
      value: '2k-4k'
    }, {label: '4k-6k', value: '4k-6k'}, {label: '6k-8k', value: '6k-8k'}, {
      label: '8k-10k',
      value: '8k-10k'
    }, {label: '10k-15k', value: '10k-15k'}, {label: '15k-25k', value: '15k-25k'}, {label: '25k-35k', value: '25k-35k'}, {
      label: '35k-50k',
      value: '35k-50k'
    }, {label: '50k-70k', value: '50k-70k'}, {label: '70k-100k', value: '70k-100k'}, {label: '100k以上', value: '100k以上'}],
    //企业性质
    enterpriseNature: [{label: '国有控股', value: '国有控股'}, {label: '民营控股', value: '民营控股'}, {label: '其他', value: '其他'}],
    //荣誉奖项奖项类别
    award_type: [{label: '企业奖项', value: '1'}, {label: '员工奖项', value: '2'}, {label: '产品(工程)奖项', value: '3'}],
    //荣誉奖项奖项等级
    award_level: [{label: '国家级奖项', value: '1'}, {label: '省级奖项', value: '2'}, {label: '市县级奖项', value: '3'}, {
      label: '行业奖项',
      value: '4'
    }],
    //社保种类
    socialSecurityType: [{label: '城镇职工基本养老保险', value: '城镇职工基本养老保险'}, {
      label: '职工基本医疗保险',
      value: '职工基本医疗保险'
    }, {label: '生育保险', value: '生育保险'}, {label: '工伤保险', value: '工伤保险'}, {label: '失业保险', value: '失业保险'}],
    //订单类型
    order_type: [{label: '信用亮点', value: '1'}, {label: '风险提示', value: '2'}, {label: '评语摘要', value: '3'}, {
      label: '评估报告',
      value: '4'
    }, {label: '诚信认证', value: '5'}, {label: '指标检测', value: '6'}]
  }
;

export default screen
