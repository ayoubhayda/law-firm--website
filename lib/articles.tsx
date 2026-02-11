import {
  blog_1,
  blog_2,
  blog_3,
  blog_4,
  blog_5,
  blog_6,
  blog_7,
  blog_8,
} from "@/assets/blog-images";

export interface Article {
  id: number;
  slug: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  content: {
    ar: string;
    en: string;
  };
  category: string;
  categoryName: string;
  date: string;
  readTimeAr: string;
  readTimeEn: string;
  authorAr: string;
  authorEn: string;
  image?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "family-law-guide-uae",
    titleAr: "دليل شامل لقانون الأسرة في الإمارات",
    titleEn: "Complete Guide to Family Law in the UAE",
    excerptAr:
      "دليل شامل ومفصل لقانون الأسرة في دولة الإمارات العربية المتحدة، يتضمن شرحاً وافياً لأهم القوانين والإجراءات المتعلقة بقضايا الأسرة والزواج والطلاق وحضانة الأطفال والنفقة والميراث. يغطي هذا الدليل جميع الجوانب القانونية التي يحتاجها المواطنون والمقيمون عند التعامل مع القضايا الأسرية، مع شرح مفصل لحقوق وواجبات كل طرف في العلاقة الزوجية والأسرية، وأهم الإجراءات القانونية المطلوبة في كل حالة.",
    excerptEn:
      "A comprehensive and detailed guide to family law in the UAE, including thorough explanations of the most important laws and procedures related to family, marriage, divorce, child custody, maintenance, and inheritance cases. This guide covers all legal aspects that citizens and residents need when dealing with family matters, with detailed explanations of the rights and obligations of each party in marital and family relationships, and the most important legal procedures required in each case.",
    category: "family",
    categoryName: "قانون الأسرة / Family Law",
    date: "2024-01-15",
    readTimeAr: "5 دقائق",
    readTimeEn: "5 min read",
    authorAr: "المحامي عبدالرحمن الهرمودي",
    authorEn: "Lawyer Abdulrahman Al-Harmoudi",
    image: blog_1.src,
    content: {
      ar: `
        <style>
          .family-law-article {
            font-family: 'Times New Roman', serif;
            line-height: 1.7;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .article-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #333;
          }
          .article-title {
            font-size: 2.2em;
            margin: 0 0 10px 0;
            font-weight: bold;
            color: #222;
          }
          .article-subtitle {
            font-size: 1.1em;
            color: #666;
            margin: 0;
            font-style: italic;
          }
          .section {
            margin: 30px 0;
          }
          .section h2 {
            color: #222;
            font-size: 1.6em;
            margin: 30px 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
          }
          .section h3 {
            color: #333;
            font-size: 1.3em;
            margin: 25px 0 10px 0;
            font-weight: bold;
          }
          .section h4 {
            color: #444;
            font-size: 1.1em;
            margin: 20px 0 8px 0;
            font-weight: bold;
          }
          .rights-obligations {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
          }
          .rights-box, .obligations-box {
            padding: 20px;
            border: 1px solid #ddd;
            background: #f9f9f9;
          }
          .rights-box h4, .obligations-box h4 {
            margin: 0 0 15px 0;
            font-size: 1.2em;
            color: #222;
            font-weight: bold;
          }
          .highlight-box {
            background: #f5f5f5;
            border: 1px solid #ccc;
            padding: 20px;
            margin: 20px 0;
          }
          .highlight-box h3 {
            color: #222;
            margin-top: 0;
            font-weight: bold;
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border: 1px solid #ccc;
          }
          .comparison-table th {
            background: #f0f0f0;
            color: #222;
            padding: 12px;
            text-align: right;
            font-weight: bold;
            border: 1px solid #ccc;
          }
          .comparison-table td {
            padding: 10px 12px;
            border: 1px solid #ccc;
            text-align: right;
          }
          .comparison-table tr:nth-child(even) {
            background: #f9f9f9;
          }
          .step-list {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
          }
          .step-list li {
            counter-increment: step-counter;
            margin: 10px 0;
            padding: 15px;
            background: #f9f9f9;
            border-right: 3px solid #333;
            position: relative;
            padding-right: 50px;
          }
          .step-list li::before {
            content: counter(step-counter);
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: #333;
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.9em;
          }
          .warning-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            margin: 20px 0;
          }
          .warning-box h4 {
            color: #856404;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .tip-box {
            background: #d1ecf1;
            border: 1px solid #bee5eb;
            padding: 15px;
            margin: 20px 0;
          }
          .tip-box h4 {
            color: #0c5460;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .article-footer {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 20px;
            margin-top: 40px;
            text-align: center;
          }
          .article-footer p {
            margin: 0;
            font-size: 0.9em;
            color: #666;
          }
          @media (max-width: 768px) {
            .rights-obligations {
              grid-template-columns: 1fr;
            }
            .article-title {
              font-size: 1.8em;
            }
          }
          
          /* Dark mode styles - using parent dark class */
          .dark .family-law-article {
            color: #e5e5e5;
          }
          .dark .article-header {
            border-bottom-color: #e5e5e5;
          }
          .dark .article-title {
            color: #ffffff;
          }
          .dark .article-subtitle {
            color: #b3b3b3;
          }
          .dark .section h2 {
            color: #ffffff;
            border-bottom-color: #404040;
          }
          .dark .section h3 {
            color: #e5e5e5;
          }
          .dark .section h4 {
            color: #d1d1d1;
          }
          .dark .rights-box, .dark .obligations-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .rights-box h4, .dark .obligations-box h4 {
            color: #ffffff;
          }
          .dark .highlight-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .highlight-box h3 {
            color: #ffffff;
          }
          .dark .comparison-table {
            border-color: #404040;
          }
          .dark .comparison-table th {
            background: #404040;
            color: #ffffff;
            border-color: #404040;
          }
          .dark .comparison-table td {
            border-color: #404040;
          }
          .dark .comparison-table tr:nth-child(even) {
            background: #2a2a2a;
          }
          .dark .step-list li {
            background: #2a2a2a;
            border-left-color: #e5e5e5;
          }
          .dark .step-list li::before {
            background: #e5e5e5;
            color: #000000;
          }
          .dark .warning-box {
            background: #3d2f00;
            border-color: #6b4c00;
          }
          .dark .warning-box h4 {
            color: #ffd700;
          }
          .dark .tip-box {
            background: #0d2d3a;
            border-color: #1a4a5c;
          }
          .dark .tip-box h4 {
            color: #87ceeb;
          }
          .dark .article-footer {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .article-footer p {
            color: #b3b3b3;
          }
        </style>
        
        <div class="family-law-article">
          <div class="article-header">
            <h1 class="article-title">دليل شامل لقانون الأسرة في الإمارات</h1>
            <p class="article-subtitle">دليل شامل ومفصل لقانون الأسرة في دولة الإمارات العربية المتحدة</p>
          </div>

          <div class="section">
            <h2>مقدمة عن قانون الأسرة السعودي</h2>
            <p>يستند قانون الأسرة في دولة الإمارات العربية المتحدة إلى أحكام الشريعة الإسلامية ومبادئها، ويشمل جميع القوانين والأنظمة المتعلقة بالزواج والطلاق وحضانة الأطفال والنفقة والميراث. يهدف هذا القانون إلى حماية الأسرة وضمان حقوق جميع أفرادها وفقاً للمبادئ الإسلامية والقيم الاجتماعية.</p>
            
            <div class="highlight-box">
              <h3>أهداف قانون الأسرة</h3>
              <ul>
                <li>حماية الأسرة كوحدة اجتماعية أساسية</li>
                <li>ضمان حقوق المرأة والطفل</li>
                <li>تنظيم العلاقات الزوجية والأسرية</li>
                <li>حماية المصلحة الفضلى للأطفال</li>
                <li>ضمان العدالة في حل النزاعات الأسرية</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>الزواج في القانون الإماراتي</h2>
            
            <h3>شروط الزواج</h3>
            <p>يجب توفر عدة شروط لصحة عقد الزواج في الإمارات:</p>
            
            <div class="rights-obligations">
              <div class="rights-box">
                <h4>الشروط الأساسية</h4>
                <ul>
                  <li><strong>الرضا:</strong> رضا الطرفين بالزواج</li>
                  <li><strong>الأهلية:</strong> بلوغ سن الرشد القانوني</li>
                  <li><strong>الولي:</strong> وجود ولي للمرأة</li>
                  <li><strong>الشهود:</strong> حضور شاهدين مسلمين</li>
                  <li><strong>المهر:</strong> تحديد المهر</li>
                </ul>
              </div>
              
              <div class="obligations-box">
                <h4>الموانع الشرعية</h4>
                <ul>
                  <li><strong>المحرمات:</strong> من يحرم الزواج منهن</li>
                  <li><strong>الرضاعة:</strong> المحرمات بالرضاعة</li>
                  <li><strong>العدة:</strong> عدم انتهاء العدة</li>
                  <li><strong>الإسلام:</strong> عدم اختلاف الدين</li>
                  <li><strong>العدد:</strong> عدم تجاوز العدد المسموح</li>
                </ul>
              </div>
            </div>

            <h3>إجراءات عقد الزواج</h3>
            <ol class="step-list">
              <li><strong>التقدم للزواج:</strong> التقدم بطلب الزواج للجهة المختصة</li>
              <li><strong>فحص الأوراق:</strong> فحص الأوراق المطلوبة</li>
              <li><strong>الفحص الطبي:</strong> إجراء الفحص الطبي للطرفين</li>
              <li><strong>عقد الزواج:</strong> إجراء عقد الزواج أمام القاضي</li>
              <li><strong>التوثيق:</strong> توثيق عقد الزواج</li>
            </ol>
          </div>

          <div class="section">
            <h2>الطلاق في القانون الإماراتي</h2>
            <p>ينظم القانون الإماراتي إجراءات الطلاق وحقوق الطرفين والأطفال في هذه الحالة.</p>
            
            <h3>أنواع الطلاق</h3>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>نوع الطلاق</th>
                  <th>الوصف</th>
                  <th>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>الطلاق الرجعي</td>
                  <td>يمكن للزوج إرجاع زوجته خلال العدة</td>
                  <td>إشعار المحكمة خلال العدة</td>
                </tr>
                <tr>
                  <td>الطلاق البائن</td>
                  <td>لا يمكن إرجاع الزوجة إلا بعقد جديد</td>
                  <td>إجراء عقد زواج جديد</td>
                </tr>
                <tr>
                  <td>الطلاق الخُلعي</td>
                  <td>طلاق بطلب الزوجة مقابل تنازل</td>
                  <td>موافقة الزوج أو حكم المحكمة</td>
                </tr>
                <tr>
                  <td>الطلاق للضرر</td>
                  <td>طلاق بسبب ضرر يلحق بالزوجة</td>
                  <td>إثبات الضرر أمام المحكمة</td>
                </tr>
              </tbody>
            </table>

            <div class="warning-box">
              <h4>تحذير مهم</h4>
              <p>يجب إشعار المحكمة بجميع أنواع الطلاق خلال 30 يوماً من وقوعه، وإلا قد يترتب على ذلك غرامات قانونية.</p>
            </div>
          </div>

          <div class="section">
            <h2>حضانة الأطفال</h2>
            <p>تنظم أحكام الحضانة في القانون الإماراتي رعاية الأطفال بعد الطلاق أو وفاة أحد الوالدين.</p>
            
            <div class="rights-obligations">
              <div class="rights-box">
                <h4>أولوية الحضانة</h4>
                <ul>
                  <li><strong>الأم:</strong> أولوية للأم إذا توفرت الشروط</li>
                  <li><strong>الجدة:</strong> جدة الأم ثم جدة الأب</li>
                  <li><strong>الأخت:</strong> الأخت الشقيقة ثم لأب</li>
                  <li><strong>العمات:</strong> عمات الأم ثم عمات الأب</li>
                  <li><strong>الخالات:</strong> خالات الأم ثم خالات الأب</li>
                </ul>
              </div>
              
              <div class="obligations-box">
                <h4>شروط الحاضن</h4>
                <ul>
                  <li><strong>الأهلية:</strong> بلوغ سن الرشد</li>
                  <li><strong>الأمانة:</strong> الثقة والأمانة</li>
                  <li><strong>القدرة:</strong> القدرة على رعاية الطفل</li>
                  <li><strong>الاستقرار:</strong> الاستقرار النفسي والاجتماعي</li>
                  <li><strong>الديانة:</strong> الإسلام (في معظم الحالات)</li>
                </ul>
              </div>
            </div>

            <h3>حقوق المحضون</h3>
            <ul>
              <li><strong>النفقة:</strong> حق الطفل في النفقة من الأب</li>
              <li><strong>الزيارة:</strong> حق الأب في زيارة الطفل</li>
              <li><strong>التعليم:</strong> حق الطفل في التعليم المناسب</li>
              <li><strong>الرعاية الصحية:</strong> حق الطفل في الرعاية الطبية</li>
              <li><strong>التربية:</strong> حق الطفل في التربية السليمة</li>
            </ul>
          </div>

          <div class="section">
            <h2>النفقة في القانون الإماراتي</h2>
            <p>تعتبر النفقة من الحقوق الأساسية في القانون الإماراتي وتشمل عدة أنواع.</p>
            
            <h3>أنواع النفقة</h3>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>نوع النفقة</th>
                  <th>المستحق</th>
                  <th>الشروط</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>نفقة الزوجة</td>
                  <td>الزوجة</td>
                  <td>الزوجة المطاعة</td>
                </tr>
                <tr>
                  <td>نفقة الأولاد</td>
                  <td>الأطفال</td>
                  <td>حتى البلوغ أو الزواج</td>
                </tr>
                <tr>
                  <td>نفقة الوالدين</td>
                  <td>الوالدين</td>
                  <td>عند الحاجة والعجز</td>
                </tr>
                <tr>
                  <td>نفقة الأقارب</td>
                  <td>الأقارب</td>
                  <td>حسب درجة القرابة</td>
                </tr>
              </tbody>
            </table>

            <div class="tip-box">
              <h4>نصيحة قانونية</h4>
              <p>يتم تحديد مقدار النفقة حسب حالة المكلف المالية وحاجة المستحق، ويمكن للمحكمة تعديلها حسب الظروف.</p>
            </div>
          </div>

          <div class="section">
            <h2>الميراث في القانون الإماراتي</h2>
            <p>ينظم قانون الميراث في الإمارات توزيع التركة وفقاً لأحكام الشريعة الإسلامية.</p>
            
            <h3>أركان الميراث</h3>
            <ol class="step-list">
              <li><strong>الموت:</strong> وفاة المورث</li>
              <li><strong>الوارث:</strong> وجود وارث حي</li>
              <li><strong>التركة:</strong> وجود مال يورث</li>
              <li><strong>عدم المانع:</strong> عدم وجود مانع من الإرث</li>
            </ol>

            <h3>أصناف الورثة</h3>
            <div class="rights-obligations">
              <div class="rights-box">
                <h4>أصحاب الفروض</h4>
                <ul>
                  <li>الزوج والزوجة</li>
                  <li>الأب والأم</li>
                  <li>البنات</li>
                  <li>الأخوات</li>
                  <li>الجد والجدة</li>
                </ul>
              </div>
              
              <div class="obligations-box">
                <h4>العصبة</h4>
                <ul>
                  <li>الأبناء</li>
                  <li>الأب</li>
                  <li>الأخوة</li>
                  <li>الأعمام</li>
                  <li>ابن العم</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>حل النزاعات الأسرية</h2>
            <p>يوفر النظام الإماراتي آليات متعددة لحل النزاعات الأسرية بشكل سلمي وعادل.</p>
            
            <h3>الوسائل الودية</h3>
            <ul>
              <li><strong>الصلح العائلي:</strong> محاولة الصلح بين الأطراف</li>
              <li><strong>الوساطة:</strong> الاستعانة بوسيط محايد</li>
              <li><strong>التحكيم:</strong> اللجوء إلى محكم متفق عليه</li>
            </ul>
        
            <h3>الوسائل القضائية</h3>
            <ul>
              <li><strong>محاكم الأحوال الشخصية:</strong> للنزاعات الأسرية</li>
              <li><strong>محاكم الاستئناف:</strong> للطعن في الأحكام</li>
              <li><strong>المحكمة العليا:</strong> للطعون النهائية</li>
            </ul>
          </div>

          <div class="section">
            <h2>نصائح مهمة للأسر</h2>
            
            <div class="tip-box">
              <h4>للزوجين</h4>
              <ul>
                <li>احرصوا على توثيق جميع العقود</li>
                <li>احتفظوا بنسخ من جميع الأوراق</li>
                <li>استعينوا بمحامٍ متخصص في الأحوال الشخصية</li>
                <li>حاولوا حل النزاعات بالطرق الودية</li>
                <li>احرصوا على مصلحة الأطفال الفضلى</li>
              </ul>
            </div>

            <div class="tip-box">
              <h4>للأطفال</h4>
              <ul>
                <li>احرصوا على حقكم في النفقة</li>
                <li>لا تترددوا في طلب المساعدة القانونية</li>
                <li>احتفظوا بسجلات من جميع المعاملات</li>
                <li>اطلبوا المساعدة النفسية عند الحاجة</li>
                <li>اعرفوا حقوقكم القانونية</li>
              </ul>
            </div>
          </div>

          <div class="article-footer">
            <p><strong>ملاحظة:</strong> هذا المقال يقدم معلومات عامة ولا يغني عن الاستشارة القانونية المتخصصة. يُنصح بالاستعانة بمحامٍ متخصص في قانون الأحوال الشخصية للحصول على استشارة قانونية دقيقة.</p>
          </div>
        </div>
      `,
      en: `
        <style>
          .family-law-article {
            font-family: 'Times New Roman', serif;
            line-height: 1.7;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .article-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #333;
          }
          .article-title {
            font-size: 2.2em;
            margin: 0 0 10px 0;
            font-weight: bold;
            color: #222;
          }
          .article-subtitle {
            font-size: 1.1em;
            color: #666;
            margin: 0;
            font-style: italic;
          }
          .section {
            margin: 30px 0;
          }
          .section h2 {
            color: #222;
            font-size: 1.6em;
            margin: 30px 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
          }
          .section h3 {
            color: #333;
            font-size: 1.3em;
            margin: 25px 0 10px 0;
            font-weight: bold;
          }
          .section h4 {
            color: #444;
            font-size: 1.1em;
            margin: 20px 0 8px 0;
            font-weight: bold;
          }
          .rights-obligations {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
          }
          .rights-box, .obligations-box {
            padding: 20px;
            border: 1px solid #ddd;
            background: #f9f9f9;
          }
          .rights-box h4, .obligations-box h4 {
            margin: 0 0 15px 0;
            font-size: 1.2em;
            color: #222;
            font-weight: bold;
          }
          .highlight-box {
            background: #f5f5f5;
            border: 1px solid #ccc;
            padding: 20px;
            margin: 20px 0;
          }
          .highlight-box h3 {
            color: #222;
            margin-top: 0;
            font-weight: bold;
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border: 1px solid #ccc;
          }
          .comparison-table th {
            background: #f0f0f0;
            color: #222;
            padding: 12px;
            text-align: left;
            font-weight: bold;
            border: 1px solid #ccc;
          }
          .comparison-table td {
            padding: 10px 12px;
            border: 1px solid #ccc;
            text-align: left;
          }
          .comparison-table tr:nth-child(even) {
            background: #f9f9f9;
          }
          .step-list {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
          }
          .step-list li {
            counter-increment: step-counter;
            margin: 10px 0;
            padding: 15px;
            background: #f9f9f9;
            border-left: 3px solid #333;
            position: relative;
            padding-left: 50px;
          }
          .step-list li::before {
            content: counter(step-counter);
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: #333;
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.9em;
          }
          .warning-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            margin: 20px 0;
          }
          .warning-box h4 {
            color: #856404;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .tip-box {
            background: #d1ecf1;
            border: 1px solid #bee5eb;
            padding: 15px;
            margin: 20px 0;
          }
          .tip-box h4 {
            color: #0c5460;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .article-footer {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 20px;
            margin-top: 40px;
            text-align: center;
          }
          .article-footer p {
            margin: 0;
            font-size: 0.9em;
            color: #666;
          }
          @media (max-width: 768px) {
            .rights-obligations {
              grid-template-columns: 1fr;
            }
            .article-title {
              font-size: 1.8em;
            }
          }
          
          /* Dark mode styles - using parent dark class */
          .dark .family-law-article {
            color: #e5e5e5;
          }
          .dark .article-header {
            border-bottom-color: #e5e5e5;
          }
          .dark .article-title {
            color: #ffffff;
          }
          .dark .article-subtitle {
            color: #b3b3b3;
          }
          .dark .section h2 {
            color: #ffffff;
            border-bottom-color: #404040;
          }
          .dark .section h3 {
            color: #e5e5e5;
          }
          .dark .section h4 {
            color: #d1d1d1;
          }
          .dark .rights-box, .dark .obligations-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .rights-box h4, .dark .obligations-box h4 {
            color: #ffffff;
          }
          .dark .highlight-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .highlight-box h3 {
            color: #ffffff;
          }
          .dark .comparison-table {
            border-color: #404040;
          }
          .dark .comparison-table th {
            background: #404040;
            color: #ffffff;
            border-color: #404040;
          }
          .dark .comparison-table td {
            border-color: #404040;
          }
          .dark .comparison-table tr:nth-child(even) {
            background: #2a2a2a;
          }
          .dark .step-list li {
            background: #2a2a2a;
            border-left-color: #e5e5e5;
          }
          .dark .step-list li::before {
            background: #e5e5e5;
            color: #000000;
          }
          .dark .warning-box {
            background: #3d2f00;
            border-color: #6b4c00;
          }
          .dark .warning-box h4 {
            color: #ffd700;
          }
          .dark .tip-box {
            background: #0d2d3a;
            border-color: #1a4a5c;
          }
          .dark .tip-box h4 {
            color: #87ceeb;
          }
          .dark .article-footer {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .article-footer p {
            color: #b3b3b3;
          }
        </style>
        
        <div class="family-law-article">
          <div class="article-header">
            <h1 class="article-title">Complete Guide to Family Law in the UAE</h1>
            <p class="article-subtitle">Comprehensive and detailed guide to family law in the United Arab Emirates</p>
          </div>

          <div class="section">
            <h2>Introduction to UAE Family Law</h2>
            <p>UAE family law is based on Islamic Sharia principles and includes all laws and regulations related to marriage, divorce, child custody, maintenance, and inheritance. This law aims to protect the family and ensure the rights of all its members according to Islamic principles and social values.</p>
            
            <div class="highlight-box">
              <h3>Family Law Objectives</h3>
              <ul>
                <li>Protect the family as a fundamental social unit</li>
                <li>Ensure women's and children's rights</li>
                <li>Regulate marital and family relationships</li>
                <li>Protect the best interests of children</li>
                <li>Ensure justice in resolving family disputes</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>Marriage in UAE Law</h2>
            
            <h3>Marriage Requirements</h3>
            <p>Several conditions must be met for a valid marriage contract in the UAE:</p>
            
            <div class="rights-obligations">
              <div class="rights-box">
                <h4>Basic Requirements</h4>
                <ul>
                  <li><strong>Consent:</strong> Both parties' consent to marriage</li>
                  <li><strong>Capacity:</strong> Reaching legal age of majority</li>
                  <li><strong>Guardian:</strong> Presence of a guardian for the woman</li>
                  <li><strong>Witnesses:</strong> Two Muslim witnesses present</li>
                  <li><strong>Dowry:</strong> Specification of dowry</li>
                </ul>
              </div>
              
              <div class="obligations-box">
                <h4>Legal Prohibitions</h4>
                <ul>
                  <li><strong>Prohibited Relations:</strong> Those forbidden to marry</li>
                  <li><strong>Breastfeeding:</strong> Prohibited by breastfeeding</li>
                  <li><strong>Waiting Period:</strong> Waiting period not completed</li>
                  <li><strong>Religion:</strong> No religious difference</li>
                  <li><strong>Number:</strong> Not exceeding allowed number</li>
                </ul>
              </div>
            </div>

            <h3>Marriage Contract Procedures</h3>
            <ol class="step-list">
              <li><strong>Marriage Application:</strong> Submit marriage application to competent authority</li>
              <li><strong>Document Review:</strong> Review required documents</li>
              <li><strong>Medical Examination:</strong> Conduct medical examination for both parties</li>
              <li><strong>Marriage Contract:</strong> Conduct marriage contract before judge</li>
              <li><strong>Documentation:</strong> Document the marriage contract</li>
            </ol>
          </div>

          <div class="section">
            <h2>Divorce in UAE Law</h2>
            <p>UAE law regulates divorce procedures and the rights of both parties and children in this case.</p>
            
            <h3>Types of Divorce</h3>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Divorce Type</th>
                  <th>Description</th>
                  <th>Procedures</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Revocable Divorce</td>
                  <td>Husband can return wife during waiting period</td>
                  <td>Notify court during waiting period</td>
                </tr>
                <tr>
                  <td>Irrevocable Divorce</td>
                  <td>Wife cannot be returned except with new contract</td>
                  <td>New marriage contract required</td>
                </tr>
                <tr>
                  <td>Khula Divorce</td>
                  <td>Divorce at wife's request in exchange for waiver</td>
                  <td>Husband's consent or court ruling</td>
                </tr>
                <tr>
                  <td>Harm Divorce</td>
                  <td>Divorce due to harm to wife</td>
                  <td>Prove harm before court</td>
                </tr>
              </tbody>
            </table>

            <div class="warning-box">
              <h4>Important Warning</h4>
              <p>All types of divorce must be reported to the court within 30 days of occurrence, otherwise legal penalties may apply.</p>
            </div>
          </div>

          <div class="section">
            <h2>Child Custody</h2>
            <p>Custody provisions in UAE law regulate child care after divorce or death of one parent.</p>
            
            <div class="rights-obligations">
              <div class="rights-box">
                <h4>Custody Priority</h4>
                <ul>
                  <li><strong>Mother:</strong> Priority to mother if conditions are met</li>
                  <li><strong>Grandmother:</strong> Maternal grandmother then paternal grandmother</li>
                  <li><strong>Sister:</strong> Full sister then half sister</li>
                  <li><strong>Aunts:</strong> Maternal aunts then paternal aunts</li>
                  <li><strong>Maternal Aunts:</strong> Maternal aunts then paternal aunts</li>
                </ul>
              </div>
              
              <div class="obligations-box">
                <h4>Custodian Requirements</h4>
                <ul>
                  <li><strong>Capacity:</strong> Reaching age of majority</li>
                  <li><strong>Trustworthiness:</strong> Trust and honesty</li>
                  <li><strong>Ability:</strong> Ability to care for child</li>
                  <li><strong>Stability:</strong> Psychological and social stability</li>
                  <li><strong>Religion:</strong> Islam (in most cases)</li>
                </ul>
              </div>
            </div>

            <h3>Custodial Rights</h3>
            <ul>
              <li><strong>Maintenance:</strong> Child's right to maintenance from father</li>
              <li><strong>Visitation:</strong> Father's right to visit child</li>
              <li><strong>Education:</strong> Child's right to appropriate education</li>
              <li><strong>Healthcare:</strong> Child's right to medical care</li>
              <li><strong>Upbringing:</strong> Child's right to proper upbringing</li>
            </ul>
          </div>

          <div class="section">
            <h2>Maintenance in UAE Law</h2>
            <p>Maintenance is considered a fundamental right in UAE law and includes several types.</p>
            
            <h3>Types of Maintenance</h3>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Maintenance Type</th>
                  <th>Recipient</th>
                  <th>Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wife Maintenance</td>
                  <td>Wife</td>
                  <td>Obedient wife</td>
                </tr>
                <tr>
                  <td>Children Maintenance</td>
                  <td>Children</td>
                  <td>Until puberty or marriage</td>
                </tr>
                <tr>
                  <td>Parents Maintenance</td>
                  <td>Parents</td>
                  <td>When needed and unable</td>
                </tr>
                <tr>
                  <td>Relatives Maintenance</td>
                  <td>Relatives</td>
                  <td>According to degree of kinship</td>
                </tr>
              </tbody>
            </table>

            <div class="tip-box">
              <h4>Legal Tip</h4>
              <p>The amount of maintenance is determined according to the financial status of the obligated person and the needs of the recipient, and can be adjusted by the court according to circumstances.</p>
            </div>
          </div>

          <div class="section">
            <h2>Inheritance in UAE Law</h2>
            <p>Inheritance law in the UAE regulates estate distribution according to Islamic Sharia provisions.</p>
            
            <h3>Inheritance Elements</h3>
            <ol class="step-list">
              <li><strong>Death:</strong> Death of the deceased</li>
              <li><strong>Heir:</strong> Presence of living heir</li>
              <li><strong>Estate:</strong> Presence of inheritable property</li>
              <li><strong>No Obstacle:</strong> No obstacle to inheritance</li>
            </ol>

            <h3>Heir Categories</h3>
            <div class="rights-obligations">
              <div class="rights-box">
                <h4>Fixed Share Holders</h4>
                <ul>
                  <li>Husband and wife</li>
                  <li>Father and mother</li>
                  <li>Daughters</li>
                  <li>Sisters</li>
                  <li>Grandfather and grandmother</li>
                </ul>
              </div>
              
              <div class="obligations-box">
                <h4>Residual Heirs</h4>
                <ul>
                  <li>Sons</li>
                  <li>Father</li>
                  <li>Brothers</li>
                  <li>Uncles</li>
                  <li>Cousins</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Family Dispute Resolution</h2>
            <p>The UAE system provides multiple mechanisms for resolving family disputes peacefully and fairly.</p>
            
            <h3>Amicable Methods</h3>
            <ul>
              <li><strong>Family Reconciliation:</strong> Attempting reconciliation between parties</li>
              <li><strong>Mediation:</strong> Using a neutral mediator</li>
              <li><strong>Arbitration:</strong> Resorting to an agreed arbitrator</li>
            </ul>
        
            <h3>Judicial Methods</h3>
            <ul>
              <li><strong>Personal Status Courts:</strong> For family disputes</li>
              <li><strong>Appeal Courts:</strong> For appealing judgments</li>
              <li><strong>Supreme Court:</strong> For final appeals</li>
            </ul>
          </div>

          <div class="section">
            <h2>Important Tips for Families</h2>
            
            <div class="tip-box">
              <h4>For Couples</h4>
              <ul>
                <li>Ensure documentation of all contracts</li>
                <li>Keep copies of all documents</li>
                <li>Consult a lawyer specialized in personal status</li>
                <li>Try to resolve disputes amicably</li>
                <li>Ensure the best interests of children</li>
              </ul>
            </div>

            <div class="tip-box">
              <h4>For Children</h4>
              <ul>
                <li>Ensure your right to maintenance</li>
                <li>Don't hesitate to seek legal help</li>
                <li>Keep records of all transactions</li>
                <li>Seek psychological help when needed</li>
                <li>Know your legal rights</li>
              </ul>
            </div>
          </div>

          <div class="article-footer">
            <p><strong>Note:</strong> This article provides general information and does not replace specialized legal consultation. It is recommended to consult with a lawyer specialized in personal status law for accurate legal advice.</p>
          </div>
        </div>
      `,
    },
  },
  {
    id: 2,
    slug: "company-establishment-uae",
    titleAr: "كيفية تأسيس شركة في الإمارات",
    titleEn: "How to Establish a Company in the UAE",
    excerptAr:
      "دليل شامل ومفصل لتأسيس الشركات في دولة الإمارات العربية المتحدة، يتضمن خطوات مفصلة وواضحة لجميع أنواع الشركات مع شرح كامل للمتطلبات القانونية والإجراءات اللازمة. يغطي هذا الدليل جميع الجوانب العملية والنظرية لتأسيس الشركات، من اختيار نوع الشركة المناسب إلى الحصول على جميع التراخيص المطلوبة، مع نصائح عملية مهمة لضمان نجاح العملية وتجنب المشاكل القانونية المستقبلية.",
    excerptEn:
      "A comprehensive and detailed guide to establishing companies in the UAE, including detailed and clear steps for all types of companies with complete explanations of legal requirements and necessary procedures. This guide covers all practical and theoretical aspects of company formation, from choosing the appropriate company type to obtaining all required licenses, with important practical tips to ensure process success and avoid future legal problems.",
    content: {
      ar: `
        <style>
          .company-article {
            font-family: 'Times New Roman', serif;
            line-height: 1.7;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .article-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #333;
          }
          .article-title {
            font-size: 2.2em;
            margin: 0 0 10px 0;
            font-weight: bold;
            color: #222;
          }
          .article-subtitle {
            font-size: 1.1em;
            color: #666;
            margin: 0;
            font-style: italic;
          }
          .section {
            margin: 30px 0;
          }
          .section h2 {
            color: #222;
            font-size: 1.6em;
            margin: 30px 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
          }
          .section h3 {
            color: #333;
            font-size: 1.3em;
            margin: 25px 0 10px 0;
            font-weight: bold;
          }
          .section h4 {
            color: #444;
            font-size: 1.1em;
            margin: 20px 0 8px 0;
            font-weight: bold;
          }
          .company-types {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
          }
          .company-box {
            padding: 20px;
            border: 1px solid #ddd;
            background: #f9f9f9;
          }
          .company-box h4 {
            margin: 0 0 15px 0;
            font-size: 1.2em;
            color: #222;
            font-weight: bold;
          }
          .highlight-box {
            background: #f5f5f5;
            border: 1px solid #ccc;
            padding: 20px;
            margin: 20px 0;
          }
          .highlight-box h3 {
            color: #222;
            margin-top: 0;
            font-weight: bold;
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border: 1px solid #ccc;
          }
          .comparison-table th {
            background: #f0f0f0;
            color: #222;
            padding: 12px;
            text-align: right;
            font-weight: bold;
            border: 1px solid #ccc;
          }
          .comparison-table td {
            padding: 10px 12px;
            border: 1px solid #ccc;
            text-align: right;
          }
          .comparison-table tr:nth-child(even) {
            background: #f9f9f9;
          }
          .step-list {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
          }
          .step-list li {
            counter-increment: step-counter;
            margin: 10px 0;
            padding: 15px;
            background: #f9f9f9;
            border-right: 3px solid #333;
            position: relative;
            padding-right: 50px;
          }
          .step-list li::before {
            content: counter(step-counter);
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: #333;
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.9em;
          }
          .warning-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            margin: 20px 0;
          }
          .warning-box h4 {
            color: #856404;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .tip-box {
            background: #d1ecf1;
            border: 1px solid #bee5eb;
            padding: 15px;
            margin: 20px 0;
          }
          .tip-box h4 {
            color: #0c5460;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .article-footer {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 20px;
            margin-top: 40px;
            text-align: center;
          }
          .article-footer p {
            margin: 0;
            font-size: 0.9em;
            color: #666;
          }
          @media (max-width: 768px) {
            .company-types {
              grid-template-columns: 1fr;
            }
            .article-title {
              font-size: 1.8em;
            }
          }
          
          /* Dark mode styles - using parent dark class */
          .dark .company-article {
            color: #e5e5e5;
          }
          .dark .article-header {
            border-bottom-color: #e5e5e5;
          }
          .dark .article-title {
            color: #ffffff;
          }
          .dark .article-subtitle {
            color: #b3b3b3;
          }
          .dark .section h2 {
            color: #ffffff;
            border-bottom-color: #404040;
          }
          .dark .section h3 {
            color: #e5e5e5;
          }
          .dark .section h4 {
            color: #d1d1d1;
          }
          .dark .company-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .company-box h4 {
            color: #ffffff;
          }
          .dark .highlight-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .highlight-box h3 {
            color: #ffffff;
          }
          .dark .comparison-table {
            border-color: #404040;
          }
          .dark .comparison-table th {
            background: #404040;
            color: #ffffff;
            border-color: #404040;
          }
          .dark .comparison-table td {
            border-color: #404040;
          }
          .dark .comparison-table tr:nth-child(even) {
            background: #2a2a2a;
          }
          .dark .step-list li {
            background: #2a2a2a;
            border-left-color: #e5e5e5;
          }
          .dark .step-list li::before {
            background: #e5e5e5;
            color: #000000;
          }
          .dark .warning-box {
            background: #3d2f00;
            border-color: #6b4c00;
          }
          .dark .warning-box h4 {
            color: #ffd700;
          }
          .dark .tip-box {
            background: #0d2d3a;
            border-color: #1a4a5c;
          }
          .dark .tip-box h4 {
            color: #87ceeb;
          }
          .dark .article-footer {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .article-footer p {
            color: #b3b3b3;
          }
        </style>
        
        <div class="company-article">
          <div class="article-header">
            <h1 class="article-title">كيفية تأسيس شركة في الإمارات</h1>
            <p class="article-subtitle">دليل شامل لتأسيس الشركات وفق النظام الإماراتي</p>
          </div>

          <div class="section">
            <h2>مقدمة عن تأسيس الشركات في الإمارات</h2>
            <p>تشهد دولة الإمارات العربية المتحدة نهضة اقتصادية كبيرة في إطار رؤية الإمارات 2030، مما جعل تأسيس الشركات أمراً أكثر سهولة ومرونة. ينظم نظام الشركات السعودي الجديد جميع إجراءات تأسيس الشركات ويوفر بيئة استثمارية جاذبة للمستثمرين المحليين والأجانب.</p>
            
            <div class="highlight-box">
              <h3>مزايا تأسيس الشركات في الإمارات</h3>
              <ul>
                <li>اقتصاد قوي ومستقر</li>
                <li>موقع جغرافي استراتيجي</li>
                <li>بنية تحتية متطورة</li>
                <li>دعم حكومي للاستثمار</li>
                <li>إجراءات مبسطة ورقمية</li>
                <li>حوافز ضريبية متنوعة</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>أنواع الشركات في النظام الإماراتي</h2>
            <p>يتيح النظام الإماراتي تأسيس عدة أنواع من الشركات حسب طبيعة النشاط وحجم رأس المال:</p>
            
            <div class="company-types">
              <div class="company-box">
                <h4>شركات الأشخاص</h4>
                <ul>
                  <li><strong>شركة التضامن:</strong> جميع الشركاء مسؤولون بالتضامن</li>
                  <li><strong>شركة التوصية البسيطة:</strong> شركاء متضامنون وموصون</li>
                  <li><strong>شركة المحاصة:</strong> شراكة خفية بين الشركاء</li>
                </ul>
              </div>
              
              <div class="company-box">
                <h4>شركات الأموال</h4>
                <ul>
                  <li><strong>الشركة المساهمة:</strong> رأس مال مقسم لأسهم</li>
                  <li><strong>الشركة ذات المسؤولية المحدودة:</strong> مسؤولية محدودة بالحصص</li>
                  <li><strong>شركة التوصية بالأسهم:</strong> شركاء متضامنون ومساهمون</li>
                </ul>
              </div>
            </div>

            <table class="comparison-table">
              <thead>
                <tr>
                  <th>نوع الشركة</th>
                  <th>أقل رأس مال</th>
                  <th>عدد الشركاء</th>
                  <th>المسؤولية</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>شركة التضامن</td>
                  <td>لا يوجد حد أدنى</td>
                  <td>شريكان على الأقل</td>
                  <td>مسؤولية تضامنية</td>
                </tr>
                <tr>
                  <td>ذات مسؤولية محدودة</td>
                  <td>1 ريال</td>
                  <td>شريك واحد على الأقل</td>
                  <td>محدودة بالحصص</td>
                </tr>
                <tr>
                  <td>مساهمة مقفلة</td>
                  <td>500,000 ريال</td>
                  <td>2-200 مساهم</td>
                  <td>محدودة بقيمة الأسهم</td>
                </tr>
                <tr>
                  <td>مساهمة مدرجة</td>
                  <td>10 مليون ريال</td>
                  <td>لا يوجد حد أقصى</td>
                  <td>محدودة بقيمة الأسهم</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="section">
            <h2>خطوات تأسيس الشركة</h2>
            <p>يمكن تأسيس الشركة في الإمارات من خلال الخطوات التالية:</p>
            
            <ol class="step-list">
              <li><strong>اختيار اسم الشركة:</strong> التأكد من توفر الاسم وحجزه عبر منصة قراس</li>
              <li><strong>إعداد عقد التأسيس:</strong> صياغة عقد التأسيس والنظام الأساسي</li>
              <li><strong>فتح حساب بنكي:</strong> إيداع رأس المال في حساب بنكي باسم الشركة</li>
              <li><strong>التسجيل في السجل التجاري:</strong> تقديم الطلب للحصول على السجل التجاري</li>
              <li><strong>التسجيل الضريبي:</strong> التسجيل في الزكاة والضريبة والجمارك</li>
              <li><strong>التسجيل في التأمينات:</strong> التسجيل في المؤسسة العامة للتأمينات الاجتماعية</li>
              <li><strong>الحصول على التراخيص:</strong> الحصول على التراخيص المطلوبة للنشاط</li>
            </ol>
          </div>

          <div class="section">
            <h2>المتطلبات والوثائق المطلوبة</h2>
            
            <h3>للمؤسسين السعوديين</h3>
            <ul>
              <li>صورة من الهوية الوطنية سارية المفعول</li>
              <li>عقد التأسيس والنظام الأساسي</li>
              <li>إثبات إيداع رأس المال</li>
              <li>عقد إيجار أو ملكية مقر الشركة</li>
              <li>شهادة عدم ممانعة (إن وجدت)</li>
            </ul>

            <h3>للمؤسسين الأجانب</h3>
            <ul>
              <li>جواز سفر ساري المفعول</li>
              <li>ترجمة معتمدة للوثائق</li>
              <li>شهادة حسن السيرة والسلوك</li>
              <li>إثبات الخبرة المهنية</li>
              <li>ترخيص استثمار أجنبي (حسب النشاط)</li>
            </ul>

            <div class="tip-box">
              <h4>نصيحة مهمة</h4>
              <p>يُنصح بالاستعانة بمحامٍ متخصص في القانون التجاري لضمان صحة الإجراءات وتجنب أي مشاكل قانونية مستقبلية.</p>
            </div>
          </div>

          <div class="section">
            <h2>التراخيص والموافقات المطلوبة</h2>
            <p>تختلف التراخيص المطلوبة حسب نوع النشاط التجاري:</p>
            
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>نوع النشاط</th>
                  <th>الجهة المختصة</th>
                  <th>المدة المتوقعة</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>الأنشطة التجارية العامة</td>
                  <td>وزارة التجارة</td>
                  <td>3-5 أيام عمل</td>
                </tr>
                <tr>
                  <td>الأنشطة الصناعية</td>
                  <td>وزارة الصناعة والثروة المعدنية</td>
                  <td>15-30 يوم</td>
                </tr>
                <tr>
                  <td>الخدمات المالية</td>
                  <td>مؤسسة النقد العربي السعودي</td>
                  <td>60-90 يوم</td>
                </tr>
                <tr>
                  <td>الخدمات الطبية</td>
                  <td>وزارة الصحة</td>
                  <td>30-45 يوم</td>
                </tr>
              </tbody>
            </table>

            <div class="warning-box">
              <h4>تحذير مهم</h4>
              <p>ممارسة أي نشاط تجاري بدون الحصول على التراخيص المطلوبة يعرض الشركة للغرامات والإغلاق القانوني.</p>
            </div>
          </div>

          <div class="section">
            <h2>الالتزامات القانونية للشركات</h2>
            
            <h3>الالتزامات المحاسبية</h3>
            <ul>
              <li>مسك الدفاتر التجارية المطلوبة قانوناً</li>
              <li>إعداد القوائم المالية السنوية</li>
              <li>تعيين مراجع حسابات (للشركات المساهمة)</li>
              <li>الاحتفاظ بالسجلات لمدة لا تقل عن 10 سنوات</li>
            </ul>

            <h3>الالتزامات الضريبية</h3>
            <ul>
              <li>تقديم الإقرارات الضريبية في مواعيدها</li>
              <li>دفع الزكاة وضريبة الدخل</li>
              <li>ضريبة القيمة المضافة (للأنشطة المؤهلة)</li>
              <li>الاحتفاظ بالفواتير والمستندات</li>
            </ul>

            <h3>الالتزامات التنظيمية</h3>
            <ul>
              <li>تجديد السجل التجاري سنوياً</li>
              <li>تحديث بيانات الشركة عند التغيير</li>
              <li>الحصول على موافقات التوسع أو التغيير</li>
              <li>الالتزام بأنظمة العمل والعمال</li>
            </ul>
          </div>

          <div class="section">
            <h2>التحديات الشائعة ونصائح لتجنبها</h2>
            
            <div class="tip-box">
              <h4>نصائح للنجاح</h4>
              <ul>
                <li>اختر نوع الشركة المناسب لنشاطك وحجم استثمارك</li>
                <li>احرص على صياغة عقد تأسيس واضح ومفصل</li>
                <li>تأكد من الحصول على جميع التراخيص قبل بدء النشاط</li>
                <li>احتفظ بنسخ من جميع الوثائق والتراخيص</li>
                <li>استعن بمحاسب قانوني لضمان الامتثال</li>
                <li>راجع الأنظمة واللوائح بانتظام</li>
              </ul>
            </div>

            <div class="warning-box">
              <h4>أخطاء يجب تجنبها</h4>
              <ul>
                <li>عدم التحقق من توفر اسم الشركة</li>
                <li>إهمال الحصول على التراخيص المطلوبة</li>
                <li>عدم الالتزام بالإجراءات المحاسبية</li>
                <li>تجاهل تحديث بيانات الشركة</li>
                <li>عدم الاستعانة بخبراء قانونيين</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>الخدمات الإلكترونية المتاحة</h2>
            <p>توفر الحكومة الإماراتية عدة منصات إلكترونية لتسهيل إجراءات تأسيس الشركات:</p>
            
            <ul>
              <li><strong>منصة قراس:</strong> لحجز أسماء الشركات وإصدار السجلات التجارية</li>
              <li><strong>منصة اعتماد:</strong> لخدمات الاستثمار الأجنبي</li>
              <li><strong>منصة فسح:</strong> للخدمات الجمركية</li>
              <li><strong>منصة زاتكا:</strong> للخدمات الضريبية والزكوية</li>
              <li><strong>منصة قوى:</strong> لخدمات وزارة الموارد البشرية</li>
            </ul>
          </div>

          <div class="article-footer">
            <p><strong>ملاحظة:</strong> هذا المقال يقدم معلومات عامة ولا يغني عن الاستشارة القانونية المتخصصة. يُنصح بالاستعانة بمحامٍ متخصص في القانون التجاري للحصول على استشارة قانونية دقيقة.</p>
          </div>
        </div>
      `,
      en: `
        <style>
          .company-article {
            font-family: 'Times New Roman', serif;
            line-height: 1.7;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .article-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #333;
          }
          .article-title {
            font-size: 2.2em;
            margin: 0 0 10px 0;
            font-weight: bold;
            color: #222;
          }
          .article-subtitle {
            font-size: 1.1em;
            color: #666;
            margin: 0;
            font-style: italic;
          }
          .section {
            margin: 30px 0;
          }
          .section h2 {
            color: #222;
            font-size: 1.6em;
            margin: 30px 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
          }
          .section h3 {
            color: #333;
            font-size: 1.3em;
            margin: 25px 0 10px 0;
            font-weight: bold;
          }
          .section h4 {
            color: #444;
            font-size: 1.1em;
            margin: 20px 0 8px 0;
            font-weight: bold;
          }
          .company-types {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
          }
          .company-box {
            padding: 20px;
            border: 1px solid #ddd;
            background: #f9f9f9;
          }
          .company-box h4 {
            margin: 0 0 15px 0;
            font-size: 1.2em;
            color: #222;
            font-weight: bold;
          }
          .highlight-box {
            background: #f5f5f5;
            border: 1px solid #ccc;
            padding: 20px;
            margin: 20px 0;
          }
          .highlight-box h3 {
            color: #222;
            margin-top: 0;
            font-weight: bold;
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border: 1px solid #ccc;
          }
          .comparison-table th {
            background: #f0f0f0;
            color: #222;
            padding: 12px;
            text-align: left;
            font-weight: bold;
            border: 1px solid #ccc;
          }
          .comparison-table td {
            padding: 10px 12px;
            border: 1px solid #ccc;
            text-align: left;
          }
          .comparison-table tr:nth-child(even) {
            background: #f9f9f9;
          }
          .step-list {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
          }
          .step-list li {
            counter-increment: step-counter;
            margin: 10px 0;
            padding: 15px;
            background: #f9f9f9;
            border-left: 3px solid #333;
            position: relative;
            padding-left: 50px;
          }
          .step-list li::before {
            content: counter(step-counter);
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: #333;
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.9em;
          }
          .warning-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            margin: 20px 0;
          }
          .warning-box h4 {
            color: #856404;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .tip-box {
            background: #d1ecf1;
            border: 1px solid #bee5eb;
            padding: 15px;
            margin: 20px 0;
          }
          .tip-box h4 {
            color: #0c5460;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .article-footer {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 20px;
            margin-top: 40px;
            text-align: center;
          }
          .article-footer p {
            margin: 0;
            font-size: 0.9em;
            color: #666;
          }
          @media (max-width: 768px) {
            .company-types {
              grid-template-columns: 1fr;
            }
            .article-title {
              font-size: 1.8em;
            }
          }
          
          /* Dark mode styles - using parent dark class */
          .dark .company-article {
            color: #e5e5e5;
          }
          .dark .article-header {
            border-bottom-color: #e5e5e5;
          }
          .dark .article-title {
            color: #ffffff;
          }
          .dark .article-subtitle {
            color: #b3b3b3;
          }
          .dark .section h2 {
            color: #ffffff;
            border-bottom-color: #404040;
          }
          .dark .section h3 {
            color: #e5e5e5;
          }
          .dark .section h4 {
            color: #d1d1d1;
          }
          .dark .company-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .company-box h4 {
            color: #ffffff;
          }
          .dark .highlight-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .highlight-box h3 {
            color: #ffffff;
          }
          .dark .comparison-table {
            border-color: #404040;
          }
          .dark .comparison-table th {
            background: #404040;
            color: #ffffff;
            border-color: #404040;
          }
          .dark .comparison-table td {
            border-color: #404040;
          }
          .dark .comparison-table tr:nth-child(even) {
            background: #2a2a2a;
          }
          .dark .step-list li {
            background: #2a2a2a;
            border-left-color: #e5e5e5;
          }
          .dark .step-list li::before {
            background: #e5e5e5;
            color: #000000;
          }
          .dark .warning-box {
            background: #3d2f00;
            border-color: #6b4c00;
          }
          .dark .warning-box h4 {
            color: #ffd700;
          }
          .dark .tip-box {
            background: #0d2d3a;
            border-color: #1a4a5c;
          }
          .dark .tip-box h4 {
            color: #87ceeb;
          }
          .dark .article-footer {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .article-footer p {
            color: #b3b3b3;
          }
        </style>
        
        <div class="company-article">
          <div class="article-header">
            <h1 class="article-title">How to Establish a Company in the UAE</h1>
            <p class="article-subtitle">Comprehensive Guide to Company Formation under UAE Law</p>
          </div>

          <div class="section">
            <h2>Introduction to Company Formation in the UAE</h2>
            <p>The United Arab Emirates is witnessing significant economic growth as part of Vision 2030, making company establishment easier and more flexible. The new UAE Companies Law regulates all company formation procedures and provides an attractive investment environment for both local and foreign investors.</p>
            
            <div class="highlight-box">
              <h3>Advantages of Establishing Companies in the UAE</h3>
              <ul>
                <li>Strong and stable economy</li>
                <li>Strategic geographical location</li>
                <li>Advanced infrastructure</li>
                <li>Government support for investment</li>
                <li>Simplified and digital procedures</li>
                <li>Various tax incentives</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>Types of Companies in the UAE System</h2>
            <p>The UAE system allows the establishment of several types of companies depending on the nature of activity and capital size:</p>
            
            <div class="company-types">
              <div class="company-box">
                <h4>Partnerships</h4>
                <ul>
                  <li><strong>General Partnership:</strong> All partners are jointly liable</li>
                  <li><strong>Limited Partnership:</strong> General and limited partners</li>
                  <li><strong>Undisclosed Partnership:</strong> Hidden partnership between partners</li>
                </ul>
              </div>
              
              <div class="company-box">
                <h4>Corporations</h4>
                <ul>
                  <li><strong>Joint Stock Company:</strong> Capital divided into shares</li>
                  <li><strong>Limited Liability Company:</strong> Liability limited to shares</li>
                  <li><strong>Partnership Limited by Shares:</strong> General partners and shareholders</li>
                </ul>
              </div>
            </div>

            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Company Type</th>
                  <th>Minimum Capital</th>
                  <th>Number of Partners</th>
                  <th>Liability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>General Partnership</td>
                  <td>No minimum</td>
                  <td>At least two partners</td>
                  <td>Joint liability</td>
                </tr>
                <tr>
                  <td>Limited Liability Company</td>
                  <td>1 SAR</td>
                  <td>At least one partner</td>
                  <td>Limited to shares</td>
                </tr>
                <tr>
                  <td>Closed Joint Stock</td>
                  <td>500,000 SAR</td>
                  <td>2-200 shareholders</td>
                  <td>Limited to share value</td>
                </tr>
                <tr>
                  <td>Listed Joint Stock</td>
                  <td>10 million SAR</td>
                  <td>No maximum limit</td>
                  <td>Limited to share value</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="section">
            <h2>Company Formation Steps</h2>
            <p>Companies can be established in the UAE through the following steps:</p>
            
            <ol class="step-list">
              <li><strong>Choose Company Name:</strong> Verify name availability and reserve it via Qeras platform</li>
              <li><strong>Prepare Formation Documents:</strong> Draft formation contract and articles of association</li>
              <li><strong>Open Bank Account:</strong> Deposit capital in a bank account under company name</li>
              <li><strong>Commercial Registration:</strong> Submit application for commercial registration</li>
              <li><strong>Tax Registration:</strong> Register with Zakat, Tax and Customs Authority</li>
              <li><strong>Social Insurance Registration:</strong> Register with General Organization for Social Insurance</li>
              <li><strong>Obtain Licenses:</strong> Obtain required licenses for the activity</li>
            </ol>
          </div>

          <div class="section">
            <h2>Requirements and Required Documents</h2>
            
            <h3>For UAE Founders</h3>
            <ul>
              <li>Copy of valid national ID</li>
              <li>Formation contract and articles of association</li>
              <li>Proof of capital deposit</li>
              <li>Lease or ownership contract for company premises</li>
              <li>No-objection certificate (if applicable)</li>
            </ul>

            <h3>For Foreign Founders</h3>
            <ul>
              <li>Valid passport</li>
              <li>Certified translation of documents</li>
              <li>Good conduct certificate</li>
              <li>Proof of professional experience</li>
              <li>Foreign investment license (depending on activity)</li>
            </ul>

            <div class="tip-box">
              <h4>Important Tip</h4>
              <p>It is advisable to consult with a lawyer specialized in commercial law to ensure proper procedures and avoid any future legal problems.</p>
            </div>
          </div>

          <div class="section">
            <h2>Required Licenses and Approvals</h2>
            <p>Required licenses vary depending on the type of business activity:</p>
            
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Activity Type</th>
                  <th>Competent Authority</th>
                  <th>Expected Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>General Commercial Activities</td>
                  <td>Ministry of Commerce</td>
                  <td>3-5 business days</td>
                </tr>
                <tr>
                  <td>Industrial Activities</td>
                  <td>Ministry of Industry and Mineral Resources</td>
                  <td>15-30 days</td>
                </tr>
                <tr>
                  <td>Financial Services</td>
                  <td>UAE Central Bank</td>
                  <td>60-90 days</td>
                </tr>
                <tr>
                  <td>Medical Services</td>
                  <td>Ministry of Health</td>
                  <td>30-45 days</td>
                </tr>
              </tbody>
            </table>

            <div class="warning-box">
              <h4>Important Warning</h4>
              <p>Conducting any business activity without obtaining required licenses exposes the company to fines and legal closure.</p>
            </div>
          </div>

          <div class="section">
            <h2>Legal Obligations for Companies</h2>
            
            <h3>Accounting Obligations</h3>
            <ul>
              <li>Maintain legally required commercial books</li>
              <li>Prepare annual financial statements</li>
              <li>Appoint an auditor (for joint stock companies)</li>
              <li>Keep records for at least 10 years</li>
            </ul>

            <h3>Tax Obligations</h3>
            <ul>
              <li>Submit tax returns on time</li>
              <li>Pay Zakat and income tax</li>
              <li>Value Added Tax (for eligible activities)</li>
              <li>Keep invoices and documents</li>
            </ul>

            <h3>Regulatory Obligations</h3>
            <ul>
              <li>Renew commercial registration annually</li>
              <li>Update company data when changes occur</li>
              <li>Obtain approvals for expansion or changes</li>
              <li>Comply with labor laws and regulations</li>
            </ul>
          </div>

          <div class="section">
            <h2>Common Challenges and Tips to Avoid Them</h2>
            
            <div class="tip-box">
              <h4>Tips for Success</h4>
              <ul>
                <li>Choose the appropriate company type for your activity and investment size</li>
                <li>Ensure drafting a clear and detailed formation contract</li>
                <li>Make sure to obtain all licenses before starting activity</li>
                <li>Keep copies of all documents and licenses</li>
                <li>Consult with a legal accountant to ensure compliance</li>
                <li>Review regulations and laws regularly</li>
              </ul>
            </div>

            <div class="warning-box">
              <h4>Mistakes to Avoid</h4>
              <ul>
                <li>Not verifying company name availability</li>
                <li>Neglecting to obtain required licenses</li>
                <li>Not complying with accounting procedures</li>
                <li>Ignoring company data updates</li>
                <li>Not consulting with legal experts</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>Available Electronic Services</h2>
            <p>The UAE government provides several electronic platforms to facilitate company formation procedures:</p>
            
            <ul>
              <li><strong>Qeras Platform:</strong> For reserving company names and issuing commercial registrations</li>
              <li><strong>Etimad Platform:</strong> For foreign investment services</li>
              <li><strong>Fasah Platform:</strong> For customs services</li>
              <li><strong>Zatca Platform:</strong> For tax and Zakat services</li>
              <li><strong>Qiwa Platform:</strong> For Ministry of Human Resources services</li>
            </ul>
          </div>

          <div class="article-footer">
            <p><strong>Note:</strong> This article provides general information and does not replace specialized legal consultation. It is recommended to consult with a lawyer specialized in commercial law for accurate legal advice.</p>
          </div>
        </div>
      `,
    },
    category: "business",
    categoryName: "القانون التجاري / Business Law",
    date: "2024-01-10",
    readTimeAr: "7 دقائق",
    readTimeEn: "7 min read",
    authorAr: "المحامي عبدالرحمن الهرمودي",
    authorEn: "Lawyer Abdulrahman Al-Harmoudi",
    image: blog_2.src,
  },
  {
    id: 3,
    slug: "tenant-landlord-rights-uae-law",
    titleAr: "حقوق المستأجر والمؤجر في القانون الإماراتي",
    titleEn: "Tenant and Landlord Rights in UAE Law",
    excerptAr:
      "دليل شامل ومفصل لحقوق وواجبات المستأجر والمؤجر وفقاً لنظام الإيجار الجديد في دولة الإمارات العربية المتحدة، يتضمن شرحاً وافياً لجميع الأحكام القانونية المتعلقة بعقود الإيجار وزيادة الأجرة وإنهاء العقود وحل النزاعات. يغطي هذا الدليل جميع الجوانب القانونية التي يحتاجها المستأجرون والمؤجرون، مع شرح مفصل للآليات القانونية المتاحة لحماية حقوق كل طرف وضمان علاقة إيجارية ناجحة ومتوازنة.",
    excerptEn:
      "A comprehensive and detailed guide to tenant and landlord rights and obligations according to the new rental system in the UAE, including thorough explanations of all legal provisions related to lease contracts, rent increases, contract termination, and dispute resolution. This guide covers all legal aspects that tenants and landlords need, with detailed explanations of the legal mechanisms available to protect each party's rights and ensure a successful and balanced rental relationship.",
    content: {
      ar: `
        <style>
          .rental-article {
            font-family: 'Times New Roman', serif;
            line-height: 1.7;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .article-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #333;
          }
          .article-title {
            font-size: 2.2em;
            margin: 0 0 10px 0;
            font-weight: bold;
            color: #222;
          }
          .article-subtitle {
            font-size: 1.1em;
            color: #666;
            margin: 0;
            font-style: italic;
          }
          .section {
            margin: 30px 0;
          }
          .section h2 {
            color: #222;
            font-size: 1.6em;
            margin: 30px 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
          }
          .section h3 {
            color: #333;
            font-size: 1.3em;
            margin: 25px 0 10px 0;
            font-weight: bold;
          }
          .section h4 {
            color: #444;
            font-size: 1.1em;
            margin: 20px 0 8px 0;
            font-weight: bold;
          }
          .rights-obligations {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
          }
          .rights-box, .obligations-box {
            padding: 20px;
            border: 1px solid #ddd;
            background: #f9f9f9;
          }
          .rights-box h4, .obligations-box h4 {
            margin: 0 0 15px 0;
            font-size: 1.2em;
            color: #222;
            font-weight: bold;
          }
          .highlight-box {
            background: #f5f5f5;
            border: 1px solid #ccc;
            padding: 20px;
            margin: 20px 0;
          }
          .highlight-box h3 {
            color: #222;
            margin-top: 0;
            font-weight: bold;
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border: 1px solid #ccc;
          }
          .comparison-table th {
            background: #f0f0f0;
            color: #222;
            padding: 12px;
            text-align: right;
            font-weight: bold;
            border: 1px solid #ccc;
          }
          .comparison-table td {
            padding: 10px 12px;
            border: 1px solid #ccc;
            text-align: right;
          }
          .comparison-table tr:nth-child(even) {
            background: #f9f9f9;
          }
          .step-list {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
          }
          .step-list li {
            counter-increment: step-counter;
            margin: 10px 0;
            padding: 15px;
            background: #f9f9f9;
            border-right: 3px solid #333;
            position: relative;
            padding-right: 50px;
          }
          .step-list li::before {
            content: counter(step-counter);
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: #333;
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.9em;
          }
          .warning-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            margin: 20px 0;
          }
          .warning-box h4 {
            color: #856404;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .tip-box {
            background: #d1ecf1;
            border: 1px solid #bee5eb;
            padding: 15px;
            margin: 20px 0;
          }
          .tip-box h4 {
            color: #0c5460;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .article-footer {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 20px;
            margin-top: 40px;
            text-align: center;
          }
          .article-footer p {
            margin: 0;
            font-size: 0.9em;
            color: #666;
          }
          @media (max-width: 768px) {
            .rights-obligations {
              grid-template-columns: 1fr;
            }
            .article-title {
              font-size: 1.8em;
            }
          }
          
          /* Dark mode styles - using parent dark class */
          .dark .rental-article {
            color: #e5e5e5;
          }
          .dark .article-header {
            border-bottom-color: #e5e5e5;
          }
          .dark .article-title {
            color: #ffffff;
          }
          .dark .article-subtitle {
            color: #b3b3b3;
          }
          .dark .section h2 {
            color: #ffffff;
            border-bottom-color: #404040;
          }
          .dark .section h3 {
            color: #e5e5e5;
          }
          .dark .section h4 {
            color: #d1d1d1;
          }
          .dark .rights-box, .dark .obligations-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .rights-box h4, .dark .obligations-box h4 {
            color: #ffffff;
          }
          .dark .highlight-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .highlight-box h3 {
            color: #ffffff;
          }
          .dark .comparison-table {
            border-color: #404040;
          }
          .dark .comparison-table th {
            background: #404040;
            color: #ffffff;
            border-color: #404040;
          }
          .dark .comparison-table td {
            border-color: #404040;
          }
          .dark .comparison-table tr:nth-child(even) {
            background: #2a2a2a;
          }
          .dark .step-list li {
            background: #2a2a2a;
            border-left-color: #e5e5e5;
          }
          .dark .step-list li::before {
            background: #e5e5e5;
            color: #000000;
          }
          .dark .warning-box {
            background: #3d2f00;
            border-color: #6b4c00;
          }
          .dark .warning-box h4 {
            color: #ffd700;
          }
          .dark .tip-box {
            background: #0d2d3a;
            border-color: #1a4a5c;
          }
          .dark .tip-box h4 {
            color: #87ceeb;
          }
          .dark .article-footer {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .article-footer p {
            color: #b3b3b3;
          }
        </style>
        
        <div class="rental-article">
          <div class="article-header">
            <h1 class="article-title">حقوق المستأجر والمؤجر في القانون الإماراتي</h1>
            <p class="article-subtitle">دليل شامل لنظام الإيجار الجديد وحماية حقوق الطرفين</p>
          </div>

          <div class="section">
            <h2>مقدمة عن نظام الإيجار الجديد</h2>
            <p>صدر نظام الإيجار الجديد في دولة الإمارات العربية المتحدة لتنظيم العلاقة بين المؤجر والمستأجر وحماية حقوق الطرفين. يهدف هذا النظام إلى تحقيق العدالة والشفافية في عقود الإيجار وضمان استقرار السوق العقاري.</p>
            
            <div class="highlight-box">
              <h3>أهداف النظام الجديد</h3>
              <ul>
                <li>حماية حقوق المستأجرين والمؤجرين</li>
                <li>تنظيم العلاقة الإيجارية بشكل عادل</li>
                <li>منع الاستغلال والظلم في العقود</li>
                <li>تشجيع الاستثمار العقاري</li>
                <li>ضمان استقرار السوق العقاري</li>
        </ul>
            </div>
          </div>

          <div class="section">
            <h2>حقوق وواجبات الطرفين</h2>
            
            <div class="rights-obligations">
              <div class="rights-box">
                <h4>حقوق المستأجر</h4>
                <ul>
                  <li><strong>الحق في الانتفاع:</strong> الانتفاع الكامل بالعين المؤجرة</li>
                  <li><strong>عقد مكتوب:</strong> الحصول على عقد إيجار مكتوب وموثق</li>
                  <li><strong>حماية من الزيادة:</strong> عدم زيادة الأجرة إلا وفق الضوابط</li>
                  <li><strong>الصيانة الأساسية:</strong> صيانة العقار من قبل المؤجر</li>
                  <li><strong>الخصوصية:</strong> عدم دخول المؤجر بدون إذن</li>
                  <li><strong>تجديد العقد:</strong> حق تجديد العقد في حالات معينة</li>
        </ul>
              </div>
              
              <div class="obligations-box">
                <h4>واجبات المستأجر</h4>
                <ul>
                  <li><strong>دفع الأجرة:</strong> في المواعيد المحددة</li>
                  <li><strong>المحافظة على العقار:</strong> عدم إتلافه أو إلحاق الضرر به</li>
                  <li><strong>عدم التعديل:</strong> عدم إجراء تعديلات جوهرية بدون إذن</li>
                  <li><strong>الاستخدام الصحيح:</strong> استخدام العقار للغرض المتفق عليه</li>
                  <li><strong>الإخلاء:</strong> إخلاء العقار عند انتهاء العقد</li>
        </ul>
              </div>
            </div>

            <div class="rights-obligations">
              <div class="rights-box">
                <h4>حقوق المؤجر</h4>
                <ul>
                  <li><strong>الحصول على الأجرة:</strong> الأجرة المتفق عليها في المواعيد</li>
                  <li><strong>استرداد العقار:</strong> عند انتهاء العقد</li>
                  <li><strong>زيادة الأجرة:</strong> وفق الضوابط المحددة</li>
                  <li><strong>فسخ العقد:</strong> في حالات الإخلال</li>
                  <li><strong>التعويض:</strong> عن الأضرار التي يسببها المستأجر</li>
        </ul>
              </div>
              
              <div class="obligations-box">
                <h4>واجبات المؤجر</h4>
                <ul>
                  <li><strong>تسليم العقار:</strong> في حالة صالحة للاستعمال</li>
                  <li><strong>الصيانة الأساسية:</strong> صيانة العقار وإصلاحه</li>
                  <li><strong>عدم التدخل:</strong> عدم التدخل في انتفاع المستأجر</li>
                  <li><strong>احترام الخصوصية:</strong> عدم دخول العقار بدون إذن</li>
                  <li><strong>العقد المكتوب:</strong> تقديم عقد إيجار مكتوب وموثق</li>
        </ul>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>تنظيم زيادة الأجرة</h2>
            <p>ينظم النظام الجديد زيادة الأجرة بشكل دقيق لضمان العدالة وحماية المستأجرين من الاستغلال.</p>
            
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>الضابط</th>
                  <th>التفاصيل</th>
                  <th>الاستثناءات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>فترة الحماية</td>
                  <td>لا يجوز زيادة الأجرة خلال السنة الأولى</td>
                  <td>اتفاق صريح في العقد</td>
                </tr>
                <tr>
                  <td>نسبة الزيادة</td>
                  <td>لا تتجاوز 5% سنوياً من قيمة الأجرة</td>
                  <td>تحسينات جوهرية في العقار</td>
                </tr>
                <tr>
                  <td>فترة الإشعار</td>
                  <td>90 يوماً قبل تطبيق الزيادة</td>
                  <td>حالات الطوارئ</td>
                </tr>
                <tr>
                  <td>حق الاعتراض</td>
                  <td>للمستأجر حق الاعتراض على الزيادة</td>
                  <td>الزيادة المتفق عليها مسبقاً</td>
                </tr>
              </tbody>
            </table>

            <div class="warning-box">
              <h4>تحذير مهم</h4>
              <p>أي زيادة في الأجرة تزيد عن 5% أو تتم خلال السنة الأولى تعتبر مخالفة للنظام وقد تؤدي إلى بطلان الزيادة وفرض غرامات على المؤجر.</p>
            </div>
          </div>

          <div class="section">
            <h2>إجراءات إنهاء عقد الإيجار</h2>
            <p>يمكن إنهاء عقد الإيجار في الحالات التالية مع مراعاة الإجراءات القانونية المطلوبة:</p>
            
            <ol class="step-list">
              <li><strong>انتهاء المدة المحددة:</strong> انتهاء مدة العقد المتفق عليها</li>
              <li><strong>الاتفاق المتبادل:</strong> اتفاق الطرفين على إنهاء العقد</li>
              <li><strong>الإخلال بالالتزامات:</strong> إخلال أحد الطرفين بالتزاماته</li>
              <li><strong>الحاجة الشخصية:</strong> حاجة المؤجر للعقار (وفق شروط محددة)</li>
              <li><strong>التنازل عن الحق:</strong> تنازل المستأجر عن حقه في الإيجار</li>
            </ol>

            <div class="tip-box">
              <h4>نصيحة قانونية</h4>
              <p>يجب إشعار الطرف الآخر بإنهاء العقد قبل 30 يوماً على الأقل، وإلا يعتبر العقد مجدداً تلقائياً.</p>
            </div>
          </div>

          <div class="section">
            <h2>حل النزاعات الإيجارية</h2>
            <p>يوفر النظام الإماراتي آليات متعددة لحل النزاعات الإيجارية بشكل سريع وعادل:</p>
            
            <h3>الوسائل الودية</h3>
            <ul>
              <li><strong>الصلح المباشر:</strong> التفاوض المباشر بين الطرفين</li>
              <li><strong>الوساطة:</strong> الاستعانة بوسيط محايد</li>
              <li><strong>التحكيم:</strong> اللجوء إلى محكم متفق عليه</li>
        </ul>
        
            <h3>الوسائل القضائية</h3>
            <ul>
              <li><strong>لجان فض المنازعات:</strong> اللجان المتخصصة في النزاعات الإيجارية</li>
              <li><strong>محاكم الأحوال الشخصية:</strong> للمسائل المتعلقة بالإسكان</li>
              <li><strong>المحاكم التجارية:</strong> للنزاعات التجارية العقارية</li>
        </ul>
          </div>

          <div class="section">
            <h2>نصائح مهمة للمستأجرين والمؤجرين</h2>
            
            <div class="tip-box">
              <h4>للمستأجرين</h4>
              <ul>
                <li>احتفظ بنسخة من عقد الإيجار في مكان آمن</li>
                <li>وثق جميع المراسلات مع المؤجر</li>
                <li>اطلب إيصالات دفع الأجرة</li>
                <li>لا توقع على عقد إيجار غير واضح</li>
                <li>استعن بمحامٍ عند وجود نزاع</li>
              </ul>
            </div>

            <div class="tip-box">
              <h4>للمؤجرين</h4>
              <ul>
                <li>أعد عقد إيجار واضح ومفصل</li>
                <li>وثق حالة العقار عند التسليم</li>
                <li>احترم حقوق المستأجر في الخصوصية</li>
                <li>قوم بالصيانة الدورية للعقار</li>
                <li>اتبع الإجراءات القانونية في إنهاء العقد</li>
              </ul>
            </div>
          </div>

          <div class="article-footer">
            <p><strong>ملاحظة:</strong> هذا المقال يقدم معلومات عامة ولا يغني عن الاستشارة القانونية المتخصصة. يُنصح بالاستعانة بمحامٍ متخصص في القانون العقاري للحصول على استشارة قانونية دقيقة.</p>
          </div>
        </div>
      `,
      en: `
        <style>
          .rental-article {
            font-family: 'Times New Roman', serif;
            line-height: 1.7;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .article-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #333;
          }
          .article-title {
            font-size: 2.2em;
            margin: 0 0 10px 0;
            font-weight: bold;
            color: #222;
          }
          .article-subtitle {
            font-size: 1.1em;
            color: #666;
            margin: 0;
            font-style: italic;
          }
          .section {
            margin: 30px 0;
          }
          .section h2 {
            color: #222;
            font-size: 1.6em;
            margin: 30px 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
          }
          .section h3 {
            color: #333;
            font-size: 1.3em;
            margin: 25px 0 10px 0;
            font-weight: bold;
          }
          .section h4 {
            color: #444;
            font-size: 1.1em;
            margin: 20px 0 8px 0;
            font-weight: bold;
          }
          .rights-obligations {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
          }
          .rights-box, .obligations-box {
            padding: 20px;
            border: 1px solid #ddd;
            background: #f9f9f9;
          }
          .rights-box h4, .obligations-box h4 {
            margin: 0 0 15px 0;
            font-size: 1.2em;
            color: #222;
            font-weight: bold;
          }
          .highlight-box {
            background: #f5f5f5;
            border: 1px solid #ccc;
            padding: 20px;
            margin: 20px 0;
          }
          .highlight-box h3 {
            color: #222;
            margin-top: 0;
            font-weight: bold;
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border: 1px solid #ccc;
          }
          .comparison-table th {
            background: #f0f0f0;
            color: #222;
            padding: 12px;
            text-align: left;
            font-weight: bold;
            border: 1px solid #ccc;
          }
          .comparison-table td {
            padding: 10px 12px;
            border: 1px solid #ccc;
            text-align: left;
          }
          .comparison-table tr:nth-child(even) {
            background: #f9f9f9;
          }
          .step-list {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
          }
          .step-list li {
            counter-increment: step-counter;
            margin: 10px 0;
            padding: 15px;
            background: #f9f9f9;
            border-left: 3px solid #333;
            position: relative;
            padding-left: 50px;
          }
          .step-list li::before {
            content: counter(step-counter);
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: #333;
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.9em;
          }
          .warning-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            margin: 20px 0;
          }
          .warning-box h4 {
            color: #856404;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .tip-box {
            background: #d1ecf1;
            border: 1px solid #bee5eb;
            padding: 15px;
            margin: 20px 0;
          }
          .tip-box h4 {
            color: #0c5460;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .article-footer {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 20px;
            margin-top: 40px;
            text-align: center;
          }
          .article-footer p {
            margin: 0;
            font-size: 0.9em;
            color: #666;
          }
          @media (max-width: 768px) {
            .rights-obligations {
              grid-template-columns: 1fr;
            }
            .article-title {
              font-size: 1.8em;
            }
          }
          
          /* Dark mode styles - using parent dark class */
          .dark .rental-article {
            color: #e5e5e5;
          }
          .dark .article-header {
            border-bottom-color: #e5e5e5;
          }
          .dark .article-title {
            color: #ffffff;
          }
          .dark .article-subtitle {
            color: #b3b3b3;
          }
          .dark .section h2 {
            color: #ffffff;
            border-bottom-color: #404040;
          }
          .dark .section h3 {
            color: #e5e5e5;
          }
          .dark .section h4 {
            color: #d1d1d1;
          }
          .dark .rights-box, .dark .obligations-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .rights-box h4, .dark .obligations-box h4 {
            color: #ffffff;
          }
          .dark .highlight-box {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .highlight-box h3 {
            color: #ffffff;
          }
          .dark .comparison-table {
            border-color: #404040;
          }
          .dark .comparison-table th {
            background: #404040;
            color: #ffffff;
            border-color: #404040;
          }
          .dark .comparison-table td {
            border-color: #404040;
          }
          .dark .comparison-table tr:nth-child(even) {
            background: #2a2a2a;
          }
          .dark .step-list li {
            background: #2a2a2a;
            border-left-color: #e5e5e5;
          }
          .dark .step-list li::before {
            background: #e5e5e5;
            color: #000000;
          }
          .dark .warning-box {
            background: #3d2f00;
            border-color: #6b4c00;
          }
          .dark .warning-box h4 {
            color: #ffd700;
          }
          .dark .tip-box {
            background: #0d2d3a;
            border-color: #1a4a5c;
          }
          .dark .tip-box h4 {
            color: #87ceeb;
          }
          .dark .article-footer {
            background: #2a2a2a;
            border-color: #404040;
          }
          .dark .article-footer p {
            color: #b3b3b3;
          }
        </style>
        
        <div class="rental-article">
          <div class="article-header">
            <h1 class="article-title">Tenant and Landlord Rights in UAE Law</h1>
            <p class="article-subtitle">Comprehensive Guide to the New Rental System and Rights Protection</p>
          </div>

          <div class="section">
            <h2>Introduction to the New Rental System</h2>
            <p>The new rental system was issued in the United Arab Emirates to regulate the relationship between landlord and tenant and protect the rights of both parties. This system aims to achieve justice and transparency in rental contracts and ensure real estate market stability.</p>
            
            <div class="highlight-box">
              <h3>System Objectives</h3>
              <ul>
                <li>Protect tenant and landlord rights</li>
                <li>Regulate rental relationships fairly</li>
                <li>Prevent exploitation and injustice in contracts</li>
                <li>Encourage real estate investment</li>
                <li>Ensure real estate market stability</li>
        </ul>
            </div>
          </div>

          <div class="section">
            <h2>Rights and Obligations of Both Parties</h2>
            
            <div class="rights-obligations">
              <div class="rights-box">
                <h4>Tenant Rights</h4>
                <ul>
                  <li><strong>Right to Use:</strong> Full use of the leased property</li>
                  <li><strong>Written Contract:</strong> Obtain a written and documented lease contract</li>
                  <li><strong>Rent Increase Protection:</strong> No rent increase except according to regulations</li>
                  <li><strong>Basic Maintenance:</strong> Property maintenance by the landlord</li>
                  <li><strong>Privacy:</strong> Landlord cannot enter without permission</li>
                  <li><strong>Contract Renewal:</strong> Right to renew contract in certain cases</li>
        </ul>
              </div>
              
              <div class="obligations-box">
                <h4>Tenant Obligations</h4>
                <ul>
                  <li><strong>Rent Payment:</strong> On specified dates</li>
                  <li><strong>Property Maintenance:</strong> Not damage or harm the property</li>
                  <li><strong>No Modifications:</strong> No substantial modifications without permission</li>
                  <li><strong>Proper Use:</strong> Use property for agreed purpose</li>
                  <li><strong>Vacation:</strong> Vacate property upon contract termination</li>
        </ul>
              </div>
            </div>

            <div class="rights-obligations">
              <div class="rights-box">
                <h4>Landlord Rights</h4>
                <ul>
                  <li><strong>Rent Collection:</strong> Receive agreed rent on time</li>
                  <li><strong>Property Recovery:</strong> Upon contract termination</li>
                  <li><strong>Rent Increase:</strong> According to specified regulations</li>
                  <li><strong>Contract Termination:</strong> In case of breach</li>
                  <li><strong>Compensation:</strong> For damages caused by tenant</li>
        </ul>
              </div>
              
              <div class="obligations-box">
                <h4>Landlord Obligations</h4>
                <ul>
                  <li><strong>Property Delivery:</strong> In suitable condition for use</li>
                  <li><strong>Basic Maintenance:</strong> Maintain and repair the property</li>
                  <li><strong>Non-Interference:</strong> Not interfere with tenant's use</li>
                  <li><strong>Privacy Respect:</strong> Not enter property without permission</li>
                  <li><strong>Written Contract:</strong> Provide written and documented lease contract</li>
        </ul>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Rent Increase Regulation</h2>
            <p>The new system regulates rent increases precisely to ensure fairness and protect tenants from exploitation.</p>
            
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Regulation</th>
                  <th>Details</th>
                  <th>Exceptions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Protection Period</td>
                  <td>No rent increase allowed during first year</td>
                  <td>Explicit agreement in contract</td>
                </tr>
                <tr>
                  <td>Increase Rate</td>
                  <td>Not exceeding 5% annually of rent value</td>
                  <td>Substantial property improvements</td>
                </tr>
                <tr>
                  <td>Notice Period</td>
                  <td>90 days before applying increase</td>
                  <td>Emergency cases</td>
                </tr>
                <tr>
                  <td>Objection Right</td>
                  <td>Tenant has right to object to increase</td>
                  <td>Previously agreed increase</td>
                </tr>
              </tbody>
            </table>

            <div class="warning-box">
              <h4>Important Warning</h4>
              <p>Any rent increase exceeding 5% or occurring during the first year is considered a violation of the system and may result in nullification of the increase and fines for the landlord.</p>
            </div>
          </div>

          <div class="section">
            <h2>Lease Contract Termination Procedures</h2>
            <p>Lease contracts can be terminated in the following cases while observing required legal procedures:</p>
            
            <ol class="step-list">
              <li><strong>Expiration of Specified Period:</strong> End of agreed contract period</li>
              <li><strong>Mutual Agreement:</strong> Both parties agree to terminate contract</li>
              <li><strong>Breach of Obligations:</strong> Either party breaches their obligations</li>
              <li><strong>Personal Need:</strong> Landlord's need for property (under specific conditions)</li>
              <li><strong>Right Waiver:</strong> Tenant waives their rental right</li>
            </ol>

            <div class="tip-box">
              <h4>Legal Tip</h4>
              <p>The other party must be notified of contract termination at least 30 days in advance, otherwise the contract is automatically renewed.</p>
            </div>
          </div>

          <div class="section">
            <h2>Rental Dispute Resolution</h2>
            <p>The UAE system provides multiple mechanisms for resolving rental disputes quickly and fairly:</p>
            
            <h3>Amicable Methods</h3>
            <ul>
              <li><strong>Direct Settlement:</strong> Direct negotiation between parties</li>
              <li><strong>Mediation:</strong> Using a neutral mediator</li>
              <li><strong>Arbitration:</strong> Resorting to an agreed arbitrator</li>
        </ul>
        
            <h3>Judicial Methods</h3>
            <ul>
              <li><strong>Dispute Resolution Committees:</strong> Specialized committees for rental disputes</li>
              <li><strong>Personal Status Courts:</strong> For housing-related matters</li>
              <li><strong>Commercial Courts:</strong> For commercial real estate disputes</li>
        </ul>
          </div>

          <div class="section">
            <h2>Important Tips for Tenants and Landlords</h2>
            
            <div class="tip-box">
              <h4>For Tenants</h4>
              <ul>
                <li>Keep a copy of the lease contract in a safe place</li>
                <li>Document all correspondence with the landlord</li>
                <li>Request rent payment receipts</li>
                <li>Don't sign an unclear lease contract</li>
                <li>Consult a lawyer when there's a dispute</li>
              </ul>
            </div>

            <div class="tip-box">
              <h4>For Landlords</h4>
              <ul>
                <li>Prepare a clear and detailed lease contract</li>
                <li>Document property condition upon delivery</li>
                <li>Respect tenant's privacy rights</li>
                <li>Perform regular property maintenance</li>
                <li>Follow legal procedures in contract termination</li>
              </ul>
            </div>
          </div>

          <div class="article-footer">
            <p><strong>Note:</strong> This article provides general information and does not replace specialized legal consultation. It is recommended to consult with a lawyer specialized in real estate law for accurate legal advice.</p>
          </div>
        </div>
      `,
    },
    category: "real-estate",
    categoryName: "العقارات / Real Estate",
    date: "2024-01-05",
    readTimeAr: "6 دقائق",
    readTimeEn: "6 min read",
    authorAr: "المحامي عبدالرحمن الهرمودي",
    authorEn: "Lawyer Abdulrahman Al-Harmoudi",
    image: blog_3.src,
  },
  {
    id: 4,
    slug: "criminal-defense-strategies-uae",
    titleAr: "استراتيجيات الدفاع الجنائي في الإمارات",
    titleEn: "Criminal Defense Strategies in the UAE",
    excerptAr:
      "دليل شامل ومفصل لاستراتيجيات الدفاع الجنائي وحماية حقوق المتهمين في النظام القضائي السعودي، يتضمن شرحاً وافياً لجميع أنواع الجرائم والعقوبات المقررة لها، مع استراتيجيات دفاعية متقدمة وطرق حماية الحقوق القانونية. يغطي هذا الدليل جميع مراحل الدفاع الجنائي من التحقيق إلى المحاكمة والاستئناف، مع نصائح عملية مهمة للمتهمين وأسرهم لضمان محاكمة عادلة وحماية كاملة للحقوق القانونية.",
    excerptEn:
      "A comprehensive and detailed guide to criminal defense strategies and protecting defendants' rights in the UAE judicial system, including thorough explanations of all types of crimes and their prescribed penalties, with advanced defense strategies and methods for protecting legal rights. This guide covers all stages of criminal defense from investigation to trial and appeal, with important practical tips for defendants and their families to ensure a fair trial and complete protection of legal rights.",
      content: {
        ar: `
          <style>
            .criminal-defense-article {
              font-family: 'Times New Roman', serif;
              line-height: 1.7;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .article-header {
              text-align: center;
              margin-bottom: 40px;
              padding-bottom: 20px;
              border-bottom: 2px solid #333;
            }
            .article-title {
              font-size: 2.2em;
              margin: 0 0 10px 0;
              font-weight: bold;
              color: #222;
            }
            .article-subtitle {
              font-size: 1.1em;
              color: #666;
              margin: 0;
              font-style: italic;
            }
            .section {
              margin: 30px 0;
            }
            .section h2 {
              color: #222;
              font-size: 1.6em;
              margin: 30px 0 15px 0;
              padding-bottom: 8px;
              border-bottom: 1px solid #ccc;
              font-weight: bold;
            }
            .section h3 {
              color: #333;
              font-size: 1.3em;
              margin: 25px 0 10px 0;
              font-weight: bold;
            }
            .section h4 {
              color: #444;
              font-size: 1.1em;
              margin: 20px 0 8px 0;
              font-weight: bold;
            }
            .defense-strategies {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 30px;
              margin: 20px 0;
            }
            .strategy-box, .rights-box {
              padding: 20px;
              border: 1px solid #ddd;
              background: #f9f9f9;
            }
            .strategy-box h4, .rights-box h4 {
              margin: 0 0 15px 0;
              font-size: 1.2em;
              color: #222;
              font-weight: bold;
            }
            .highlight-box {
              background: #f5f5f5;
              border: 1px solid #ccc;
              padding: 20px;
              margin: 20px 0;
            }
            .highlight-box h3 {
              color: #222;
              margin-top: 0;
              font-weight: bold;
            }
            .comparison-table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
              border: 1px solid #ccc;
            }
            .comparison-table th {
              background: #f0f0f0;
              color: #222;
              padding: 12px;
              text-align: right;
              font-weight: bold;
              border: 1px solid #ccc;
            }
            .comparison-table td {
              padding: 10px 12px;
              border: 1px solid #ccc;
              text-align: right;
            }
            .comparison-table tr:nth-child(even) {
              background: #f9f9f9;
            }
            .step-list {
              counter-reset: step-counter;
              list-style: none;
              padding: 0;
            }
            .step-list li {
              counter-increment: step-counter;
              margin: 10px 0;
              padding: 15px;
              background: #f9f9f9;
              border-right: 3px solid #333;
              position: relative;
              padding-right: 50px;
            }
            .step-list li::before {
              content: counter(step-counter);
              position: absolute;
              right: 15px;
              top: 50%;
              transform: translateY(-50%);
              background: #333;
              color: white;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 0.9em;
            }
            .warning-box {
              background: #fff3cd;
              border: 1px solid #ffeaa7;
              padding: 15px;
              margin: 20px 0;
            }
            .warning-box h4 {
              color: #856404;
              margin: 0 0 10px 0;
              font-weight: bold;
            }
            .tip-box {
              background: #d1ecf1;
              border: 1px solid #bee5eb;
              padding: 15px;
              margin: 20px 0;
            }
            .tip-box h4 {
              color: #0c5460;
              margin: 0 0 10px 0;
              font-weight: bold;
            }
            .article-footer {
              background: #f8f9fa;
              border: 1px solid #dee2e6;
              padding: 20px;
              margin-top: 40px;
              text-align: center;
            }
            .article-footer p {
              margin: 0;
              font-size: 0.9em;
              color: #666;
            }
            @media (max-width: 768px) {
              .defense-strategies {
                grid-template-columns: 1fr;
              }
              .article-title {
                font-size: 1.8em;
              }
            }
            
            /* Dark mode styles - using parent dark class */
            .dark .criminal-defense-article {
              color: #e5e5e5;
            }
            .dark .article-header {
              border-bottom-color: #e5e5e5;
            }
            .dark .article-title {
              color: #ffffff;
            }
            .dark .article-subtitle {
              color: #b3b3b3;
            }
            .dark .section h2 {
              color: #ffffff;
              border-bottom-color: #404040;
            }
            .dark .section h3 {
              color: #e5e5e5;
            }
            .dark .section h4 {
              color: #d1d1d1;
            }
            .dark .strategy-box, .dark .rights-box {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .strategy-box h4, .dark .rights-box h4 {
              color: #ffffff;
            }
            .dark .highlight-box {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .highlight-box h3 {
              color: #ffffff;
            }
            .dark .comparison-table {
              border-color: #404040;
            }
            .dark .comparison-table th {
              background: #404040;
              color: #ffffff;
              border-color: #404040;
            }
            .dark .comparison-table td {
              border-color: #404040;
            }
            .dark .comparison-table tr:nth-child(even) {
              background: #2a2a2a;
            }
            .dark .step-list li {
              background: #2a2a2a;
              border-left-color: #e5e5e5;
            }
            .dark .step-list li::before {
              background: #e5e5e5;
              color: #000000;
            }
            .dark .warning-box {
              background: #3d2f00;
              border-color: #6b4c00;
            }
            .dark .warning-box h4 {
              color: #ffd700;
            }
            .dark .tip-box {
              background: #0d2d3a;
              border-color: #1a4a5c;
            }
            .dark .tip-box h4 {
              color: #87ceeb;
            }
            .dark .article-footer {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .article-footer p {
              color: #b3b3b3;
            }
          </style>
          
          <div class="criminal-defense-article">
            <div class="article-header">
              <h1 class="article-title">استراتيجيات الدفاع الجنائي في الإمارات</h1>
              <p class="article-subtitle">دليل شامل لحماية حقوق المتهمين وضمان محاكمة عادلة</p>
            </div>
  
            <div class="section">
              <h2>مقدمة عن النظام الجنائي السعودي</h2>
              <p>يستند النظام الجنائي في دولة الإمارات العربية المتحدة إلى أحكام الشريعة الإسلامية والأنظمة المكملة لها، ويهدف إلى تحقيق العدالة وحماية المجتمع مع ضمان حقوق المتهمين. يتميز النظام بالتوازن بين حماية المجتمع ومحاكمة المتهمين وفق أسس العدالة والشفافية.</p>
              
              <div class="highlight-box">
                <h3>مبادئ النظام الجنائي السعودي</h3>
                <ul>
                  <li>افتراض البراءة حتى ثبوت الإدانة</li>
                  <li>حق الدفاع وضمان المحاكمة العادلة</li>
                  <li>منع التعذيب والمعاملة اللاإنسانية</li>
                  <li>حق الاستعانة بمحامٍ مؤهل</li>
                  <li>سرية التحقيق وحماية الخصوصية</li>
                  <li>حق الاستئناف والطعن في الأحكام</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>حقوق المتهم في النظام الإماراتي</h2>
              
              <div class="defense-strategies">
                <div class="rights-box">
                  <h4>الحقوق الأساسية</h4>
                  <ul>
                    <li><strong>افتراض البراءة:</strong> المتهم بريء حتى تثبت إدانته</li>
                    <li><strong>حق الصمت:</strong> عدم الإجبار على الإدلاء بأقوال</li>
                    <li><strong>حق المحاماة:</strong> الاستعانة بمحامٍ مؤهل</li>
                    <li><strong>حق الترجمة:</strong> للأجانب غير الناطقين بالعربية</li>
                    <li><strong>حق الاطلاع:</strong> على أوراق القضية</li>
                  </ul>
                </div>
                
                <div class="rights-box">
                  <h4>الحقوق الإجرائية</h4>
                  <ul>
                    <li><strong>حق الاستئناف:</strong> الطعن في الأحكام الصادرة</li>
                    <li><strong>حق المواجهة:</strong> مواجهة الشهود والخصوم</li>
                    <li><strong>حق الإثبات:</strong> تقديم الأدلة والبينات</li>
                    <li><strong>حق الحضور:</strong> حضور جلسات المحاكمة</li>
                    <li><strong>حق الطعن:</strong> في إجراءات التحقيق</li>
                  </ul>
                </div>
              </div>
  
              <div class="warning-box">
                <h4>تحذير مهم</h4>
                <p>أي انتهاك لحقوق المتهم أثناء التحقيق أو المحاكمة قد يؤدي إلى بطلان الإجراءات وإلغاء الأدلة المحصلة بطريقة غير قانونية.</p>
              </div>
            </div>
  
            <div class="section">
              <h2>مراحل الدعوى الجنائية</h2>
              <p>تمر الدعوى الجنائية بعدة مراحل أساسية، وفي كل مرحلة يجب اتباع استراتيجيات دفاعية محددة:</p>
              
              <ol class="step-list">
                <li><strong>مرحلة الاستدلال:</strong> جمع المعلومات الأولية والتحري عن الجريمة</li>
                <li><strong>مرحلة التحقيق:</strong> التحقيق الرسمي مع المتهم وجمع الأدلة</li>
                <li><strong>مرحلة الإحالة:</strong> إحالة القضية للمحكمة المختصة</li>
                <li><strong>مرحلة المحاكمة:</strong> نظر القضية أمام المحكمة</li>
                <li><strong>مرحلة الحكم:</strong> إصدار الحكم النهائي</li>
                <li><strong>مرحلة الاستئناف:</strong> الطعن في الحكم أمام محكمة أعلى</li>
              </ol>
            </div>
  
            <div class="section">
              <h2>استراتيجيات الدفاع الجنائي</h2>
              
              <h3>الاستراتيجيات الأساسية</h3>
              <div class="defense-strategies">
                <div class="strategy-box">
                  <h4>الدفاع الموضوعي</h4>
                  <ul>
                    <li><strong>إنكار الواقعة:</strong> إنكار حدوث الجريمة أصلاً</li>
                    <li><strong>نفي النسبة:</strong> إنكار قيام المتهم بالفعل</li>
                    <li><strong>الدفع بالبراءة:</strong> إثبات عدم ارتكاب الجريمة</li>
                    <li><strong>الدفوع الموضوعية:</strong> الدفع بأسباب الإباحة</li>
                  </ul>
                </div>
                
                <div class="strategy-box">
                  <h4>الدفاع الإجرائي</h4>
                  <ul>
                    <li><strong>بطلان الإجراءات:</strong> الدفع ببطلان التحقيق</li>
                    <li><strong>عدم الاختصاص:</strong> الدفع بعدم اختصاص المحكمة</li>
                    <li><strong>التقادم:</strong> الدفع بسقوط الدعوى بالتقادم</li>
                    <li><strong>العفو:</strong> الدفع بالعفو العام أو الخاص</li>
                  </ul>
                </div>
              </div>
  
              <h3>الاستراتيجيات المتقدمة</h3>
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>نوع الاستراتيجية</th>
                    <th>الوصف</th>
                    <th>متى تُستخدم</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>الدفاع بالضرورة</td>
                    <td>ارتكاب الفعل لتجنب ضرر أكبر</td>
                    <td>حالات الضرورة الملحة</td>
                  </tr>
                  <tr>
                    <td>الدفاع الشرعي</td>
                    <td>الدفاع عن النفس أو المال</td>
                    <td>عند وجود اعتداء أو تهديد</td>
                  </tr>
                  <tr>
                    <td>عدم الأهلية</td>
                    <td>انعدام الإدراك أو الإرادة</td>
                    <td>حالات المرض النفسي أو السن</td>
                  </tr>
                  <tr>
                    <td>الإكراه</td>
                    <td>ارتكاب الفعل تحت إكراه</td>
                    <td>وجود تهديد جدي ومباشر</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div class="section">
              <h2>التعامل مع الأدلة الجنائية</h2>
              <p>يعتبر التعامل الصحيح مع الأدلة من أهم جوانب الدفاع الجنائي الناجح:</p>
              
              <h3>أنواع الأدلة</h3>
              <ul>
                <li><strong>الأدلة المباشرة:</strong> شهادة الشهود والاعترافات</li>
                <li><strong>الأدلة غير المباشرة:</strong> القرائن والدلائل الظرفية</li>
                <li><strong>الأدلة الفنية:</strong> التقارير الطبية والفنية</li>
                <li><strong>الأدلة الرقمية:</strong> البيانات الإلكترونية والتسجيلات</li>
              </ul>
  
              <h3>طرق الطعن في الأدلة</h3>
              <div class="tip-box">
                <h4>استراتيجيات الطعن</h4>
                <ul>
                  <li>الطعن في مصداقية الشاهد وموثوقيته</li>
                  <li>إثبات تناقض الأقوال والشهادات</li>
                  <li>الطعن في صحة الإجراءات المتبعة</li>
                  <li>إثبات عدم قانونية الحصول على الدليل</li>
                  <li>الطعن في سلامة حفظ ونقل الأدلة</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>التعامل مع أنواع الجرائم المختلفة</h2>
              
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>نوع الجريمة</th>
                    <th>الاستراتيجية المناسبة</th>
                    <th>النقاط الحساسة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>جرائم الحدود</td>
                    <td>التركيز على شروط الإثبات الصارمة</td>
                    <td>اشتراط الشهود العدول والإقرار</td>
                  </tr>
                  <tr>
                    <td>جرائم القصاص</td>
                    <td>إثبات عدم العمد أو وجود شبهة</td>
                    <td>قصد الجاني ونوع السلاح المستخدم</td>
                  </tr>
                  <tr>
                    <td>جرائم التعزير</td>
                    <td>التركيز على ظروف الجريمة والجاني</td>
                    <td>السوابق والظروف المخففة</td>
                  </tr>
                  <tr>
                    <td>الجرائم الإلكترونية</td>
                    <td>الطعن في الأدلة الرقمية</td>
                    <td>سلامة الأدلة الرقمية وطرق جمعها</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div class="section">
              <h2>إجراءات ما قبل المحاكمة</h2>
              <p>هناك إجراءات مهمة يجب اتخاذها قبل بدء المحاكمة لضمان دفاع فعال:</p>
              
              <ol class="step-list">
                <li><strong>دراسة القضية:</strong> دراسة شاملة لملف القضية والأدلة</li>
                <li><strong>جمع الأدلة:</strong> جمع الأدلة المؤيدة للدفاع</li>
                <li><strong>استجواب الشهود:</strong> التحضير لاستجواب شهود الإثبات</li>
                <li><strong>تحضير الدفوع:</strong> إعداد الدفوع القانونية والموضوعية</li>
                <li><strong>التشاور مع الخبراء:</strong> الاستعانة بالخبراء المتخصصين</li>
              </ol>
            </div>
  
            <div class="section">
              <h2>استراتيجيات المرافعة</h2>
              
              <div class="defense-strategies">
                <div class="strategy-box">
                  <h4>التحضير للمرافعة</h4>
                  <ul>
                    <li>تنظيم الحجج والأدلة بشكل منطقي</li>
                    <li>تحضير الردود على ادعاءات النيابة</li>
                    <li>إعداد الأسئلة للشهود</li>
                    <li>تحضير الدفوع القانونية</li>
                  </ul>
                </div>
                
                <div class="strategy-box">
                  <h4>أثناء المرافعة</h4>
                  <ul>
                    <li>عرض الحقائق بوضوح ومنطقية</li>
                    <li>التركيز على نقاط الضعف في اتهام النيابة</li>
                    <li>استخدام الأدلة بفعالية</li>
                    <li>احترام المحكمة والإجراءات</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div class="section">
              <h2>التعامل مع الظروف المشددة والمخففة</h2>
              
              <h3>الظروف المخففة</h3>
              <ul>
                <li><strong>حسن السيرة:</strong> عدم وجود سوابق جنائية</li>
                <li><strong>الظروف الشخصية:</strong> السن والحالة الاجتماعية</li>
                <li><strong>الندم:</strong> إظهار الندم والتوبة</li>
                <li><strong>التعاون:</strong> التعاون مع السلطات</li>
                <li><strong>رد الحق:</strong> رد الحق لأصحابه</li>
              </ul>
  
              <h3>تجنب الظروف المشددة</h3>
              <div class="warning-box">
                <h4>ظروف يجب تجنبها</h4>
                <ul>
                  <li>العود إلى الجريمة أو تكرارها</li>
                  <li>استخدام العنف أو التهديد</li>
                  <li>ارتكاب الجريمة بطريقة منظمة</li>
                  <li>استغلال الوظيفة أو النفوذ</li>
                  <li>إلحاق أضرار جسيمة بالمجتمع</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>نصائح مهمة للمتهمين وأسرهم</h2>
              
              <div class="tip-box">
                <h4>للمتهم</h4>
                <ul>
                  <li>استعن بمحامٍ مؤهل ومتخصص فور علمك بالاتهام</li>
                  <li>لا تدلِ بأي أقوال قبل استشارة المحامي</li>
                  <li>احتفظ بحقك في الصمت إذا كان ذلك في مصلحتك</li>
                  <li>تعاون مع محاميك وقدم له جميع المعلومات</li>
                  <li>احترم إجراءات المحكمة والقضاة</li>
                </ul>
              </div>
  
              <div class="tip-box">
                <h4>للأسرة</h4>
                <ul>
                  <li>ابحثوا عن محامٍ متخصص في القضايا الجنائية</li>
                  <li>اجمعوا جميع الوثائق والأدلة المفيدة</li>
                  <li>قدموا الدعم المعنوي والمادي للمتهم</li>
                  <li>تواصلوا مع المحامي بانتظام</li>
                  <li>احرصوا على حضور جلسات المحاكمة</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>الاستئناف والطعن في الأحكام</h2>
              <p>يحق للمتهم الطعن في الحكم الصادر ضده وفق الإجراءات المحددة:</p>
              
              <h3>أسباب الاستئناف</h3>
              <ul>
                <li><strong>الخطأ في تطبيق القانون:</strong> تطبيق خاطئ للنصوص القانونية</li>
                <li><strong>الخطأ في الإجراءات:</strong> مخالفة الإجراءات القانونية</li>
                <li><strong>الخطأ في تقدير الأدلة:</strong> تقدير خاطئ للأدلة المقدمة</li>
                <li><strong>عدم التسبيب:</strong> عدم كفاية أسباب الحكم</li>
              </ul>
  
              <div class="tip-box">
                <h4>نصائح للاستئناف الناجح</h4>
                <ul>
                  <li>التقدم بالاستئناف في المواعيد المحددة</li>
                  <li>تحديد أسباب الاستئناف بدقة</li>
                  <li>تقديم أدلة جديدة إن وجدت</li>
                  <li>الاستعانة بمحامٍ متخصص في الاستئناف</li>
                </ul>
              </div>
            </div>
  
            <div class="article-footer">
              <p><strong>ملاحظة:</strong> هذا المقال يقدم معلومات عامة ولا يغني عن الاستشارة القانونية المتخصصة. يُنصح بالاستعانة بمحامٍ متخصص في القانون الجنائي للحصول على استشارة قانونية دقيقة تتناسب مع ظروف كل قضية.</p>
            </div>
          </div>
        `,
        en: `
          <style>
            .criminal-defense-article {
              font-family: 'Times New Roman', serif;
              line-height: 1.7;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .article-header {
              text-align: center;
              margin-bottom: 40px;
              padding-bottom: 20px;
              border-bottom: 2px solid #333;
            }
            .article-title {
              font-size: 2.2em;
              margin: 0 0 10px 0;
              font-weight: bold;
              color: #222;
            }
            .article-subtitle {
              font-size: 1.1em;
              color: #666;
              margin: 0;
              font-style: italic;
            }
            .section {
              margin: 30px 0;
            }
            .section h2 {
              color: #222;
              font-size: 1.6em;
              margin: 30px 0 15px 0;
              padding-bottom: 8px;
              border-bottom: 1px solid #ccc;
              font-weight: bold;
            }
            .section h3 {
              color: #333;
              font-size: 1.3em;
              margin: 25px 0 10px 0;
              font-weight: bold;
            }
            .section h4 {
              color: #444;
              font-size: 1.1em;
              margin: 20px 0 8px 0;
              font-weight: bold;
            }
            .defense-strategies {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 30px;
              margin: 20px 0;
            }
            .strategy-box, .rights-box {
              padding: 20px;
              border: 1px solid #ddd;
              background: #f9f9f9;
            }
            .strategy-box h4, .rights-box h4 {
              margin: 0 0 15px 0;
              font-size: 1.2em;
              color: #222;
              font-weight: bold;
            }
            .highlight-box {
              background: #f5f5f5;
              border: 1px solid #ccc;
              padding: 20px;
              margin: 20px 0;
            }
            .highlight-box h3 {
              color: #222;
              margin-top: 0;
              font-weight: bold;
            }
            .comparison-table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
              border: 1px solid #ccc;
            }
            .comparison-table th {
              background: #f0f0f0;
              color: #222;
              padding: 12px;
              text-align: left;
              font-weight: bold;
              border: 1px solid #ccc;
            }
            .comparison-table td {
              padding: 10px 12px;
              border: 1px solid #ccc;
              text-align: left;
            }
            .comparison-table tr:nth-child(even) {
              background: #f9f9f9;
            }
            .step-list {
              counter-reset: step-counter;
              list-style: none;
              padding: 0;
            }
            .step-list li {
              counter-increment: step-counter;
              margin: 10px 0;
              padding: 15px;
              background: #f9f9f9;
              border-left: 3px solid #333;
              position: relative;
              padding-left: 50px;
            }
            .step-list li::before {
              content: counter(step-counter);
              position: absolute;
              left: 15px;
              top: 50%;
              transform: translateY(-50%);
              background: #333;
              color: white;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 0.9em;
            }
            .warning-box {
              background: #fff3cd;
              border: 1px solid #ffeaa7;
              padding: 15px;
              margin: 20px 0;
            }
            .warning-box h4 {
              color: #856404;
              margin: 0 0 10px 0;
              font-weight: bold;
            }
            .tip-box {
              background: #d1ecf1;
              border: 1px solid #bee5eb;
              padding: 15px;
              margin: 20px 0;
            }
            .tip-box h4 {
              color: #0c5460;
              margin: 0 0 10px 0;
              font-weight: bold;
            }
            .article-footer {
              background: #f8f9fa;
              border: 1px solid #dee2e6;
              padding: 20px;
              margin-top: 40px;
              text-align: center;
            }
            .article-footer p {
              margin: 0;
              font-size: 0.9em;
              color: #666;
            }
            @media (max-width: 768px) {
              .defense-strategies {
                grid-template-columns: 1fr;
              }
              .article-title {
                font-size: 1.8em;
              }
            }
            
            /* Dark mode styles - using parent dark class */
            .dark .criminal-defense-article {
              color: #e5e5e5;
            }
            .dark .article-header {
              border-bottom-color: #e5e5e5;
            }
            .dark .article-title {
              color: #ffffff;
            }
            .dark .article-subtitle {
              color: #b3b3b3;
            }
            .dark .section h2 {
              color: #ffffff;
              border-bottom-color: #404040;
            }
            .dark .section h3 {
              color: #e5e5e5;
            }
            .dark .section h4 {
              color: #d1d1d1;
            }
            .dark .strategy-box, .dark .rights-box {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .strategy-box h4, .dark .rights-box h4 {
              color: #ffffff;
            }
            .dark .highlight-box {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .highlight-box h3 {
              color: #ffffff;
            }
            .dark .comparison-table {
              border-color: #404040;
            }
            .dark .comparison-table th {
              background: #404040;
              color: #ffffff;
              border-color: #404040;
            }
            .dark .comparison-table td {
              border-color: #404040;
            }
            .dark .comparison-table tr:nth-child(even) {
              background: #2a2a2a;
            }
            .dark .step-list li {
              background: #2a2a2a;
              border-left-color: #e5e5e5;
            }
            .dark .step-list li::before {
              background: #e5e5e5;
              color: #000000;
            }
            .dark .warning-box {
              background: #3d2f00;
              border-color: #6b4c00;
            }
            .dark .warning-box h4 {
              color: #ffd700;
            }
            .dark .tip-box {
              background: #0d2d3a;
              border-color: #1a4a5c;
            }
            .dark .tip-box h4 {
              color: #87ceeb;
            }
            .dark .article-footer {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .article-footer p {
              color: #b3b3b3;
            }
          </style>
          
          <div class="criminal-defense-article">
            <div class="article-header">
              <h1 class="article-title">Criminal Defense Strategies in the UAE</h1>
              <p class="article-subtitle">Comprehensive Guide to Protecting Defendants' Rights and Ensuring Fair Trial</p>
            </div>
  
            <div class="section">
              <h2>Introduction to UAE Criminal System</h2>
              <p>The criminal system in the United Arab Emirates is based on Islamic Sharia provisions and complementary regulations, aiming to achieve justice and protect society while ensuring defendants' rights. The system is characterized by balance between protecting society and trying defendants according to principles of justice and transparency.</p>
              
              <div class="highlight-box">
                <h3>Principles of UAE Criminal System</h3>
                <ul>
                  <li>Presumption of innocence until proven guilty</li>
                  <li>Right to defense and fair trial guarantee</li>
                  <li>Prohibition of torture and inhumane treatment</li>
                  <li>Right to qualified legal counsel</li>
                  <li>Investigation confidentiality and privacy protection</li>
                  <li>Right to appeal and challenge judgments</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>Defendant's Rights in UAE System</h2>
              
              <div class="defense-strategies">
                <div class="rights-box">
                  <h4>Basic Rights</h4>
                  <ul>
                    <li><strong>Presumption of Innocence:</strong> Defendant is innocent until proven guilty</li>
                    <li><strong>Right to Silence:</strong> No compulsion to make statements</li>
                    <li><strong>Right to Counsel:</strong> Assistance of qualified lawyer</li>
                    <li><strong>Right to Translation:</strong> For non-Arabic speaking foreigners</li>
                    <li><strong>Right to Access:</strong> Case documents and files</li>
                  </ul>
                </div>
                
                <div class="rights-box">
                  <h4>Procedural Rights</h4>
                  <ul>
                    <li><strong>Right to Appeal:</strong> Challenge issued judgments</li>
                    <li><strong>Right to Confrontation:</strong> Confront witnesses and opponents</li>
                    <li><strong>Right to Evidence:</strong> Present evidence and proof</li>
                    <li><strong>Right to Attend:</strong> Attend trial sessions</li>
                    <li><strong>Right to Challenge:</strong> Investigation procedures</li>
                  </ul>
                </div>
              </div>
  
              <div class="warning-box">
                <h4>Important Warning</h4>
                <p>Any violation of defendant's rights during investigation or trial may result in nullification of procedures and cancellation of illegally obtained evidence.</p>
              </div>
            </div>
  
            <div class="section">
              <h2>Stages of Criminal Case</h2>
              <p>Criminal cases go through several basic stages, and in each stage specific defense strategies must be followed:</p>
              
              <ol class="step-list">
                <li><strong>Investigation Stage:</strong> Gathering initial information and investigating the crime</li>
                <li><strong>Inquiry Stage:</strong> Official investigation with defendant and evidence collection</li>
                <li><strong>Referral Stage:</strong> Referring case to competent court</li>
                <li><strong>Trial Stage:</strong> Case consideration before court</li>
                <li><strong>Judgment Stage:</strong> Issuing final judgment</li>
                <li><strong>Appeal Stage:</strong> Challenging judgment before higher court</li>
              </ol>
            </div>
  
            <div class="section">
              <h2>Criminal Defense Strategies</h2>
              
              <h3>Basic Strategies</h3>
              <div class="defense-strategies">
                <div class="strategy-box">
                  <h4>Substantive Defense</h4>
                  <ul>
                    <li><strong>Denying the Incident:</strong> Denying crime occurrence altogether</li>
                    <li><strong>Denying Attribution:</strong> Denying defendant committed the act</li>
                    <li><strong>Plea of Innocence:</strong> Proving non-commission of crime</li>
                    <li><strong>Substantive Defenses:</strong> Plea of justification causes</li>
                  </ul>
                </div>
                
                <div class="strategy-box">
                  <h4>Procedural Defense</h4>
                  <ul>
                    <li><strong>Procedural Nullity:</strong> Plea of investigation nullity</li>
                    <li><strong>Lack of Jurisdiction:</strong> Plea of court's lack of jurisdiction</li>
                    <li><strong>Statute of Limitations:</strong> Plea of case expiry by limitation</li>
                    <li><strong>Amnesty:</strong> Plea of general or special amnesty</li>
                  </ul>
                </div>
              </div>
  
              <h3>Advanced Strategies</h3>
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Strategy Type</th>
                    <th>Description</th>
                    <th>When Used</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Defense of Necessity</td>
                    <td>Committing act to avoid greater harm</td>
                    <td>Cases of urgent necessity</td>
                  </tr>
                  <tr>
                    <td>Self-Defense</td>
                    <td>Defending self or property</td>
                    <td>When there's assault or threat</td>
                  </tr>
                  <tr>
                    <td>Lack of Capacity</td>
                    <td>Absence of awareness or will</td>
                    <td>Cases of mental illness or age</td>
                  </tr>
                  <tr>
                    <td>Duress</td>
                    <td>Committing act under duress</td>
                    <td>Existence of serious and direct threat</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div class="section">
              <h2>Handling Criminal Evidence</h2>
              <p>Proper handling of evidence is one of the most important aspects of successful criminal defense:</p>
              
              <h3>Types of Evidence</h3>
              <ul>
                <li><strong>Direct Evidence:</strong> Witness testimony and confessions</li>
                <li><strong>Indirect Evidence:</strong> Presumptions and circumstantial evidence</li>
                <li><strong>Technical Evidence:</strong> Medical and technical reports</li>
                <li><strong>Digital Evidence:</strong> Electronic data and recordings</li>
              </ul>
  
              <h3>Methods of Challenging Evidence</h3>
              <div class="tip-box">
                <h4>Challenge Strategies</h4>
                <ul>
                  <li>Challenging witness credibility and reliability</li>
                  <li>Proving contradictions in statements and testimonies</li>
                  <li>Challenging correctness of followed procedures</li>
                  <li>Proving illegality of evidence obtaining</li>
                  <li>Challenging integrity of evidence preservation and transfer</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>Handling Different Types of Crimes</h2>
              
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Crime Type</th>
                    <th>Appropriate Strategy</th>
                    <th>Sensitive Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hudud Crimes</td>
                    <td>Focus on strict proof requirements</td>
                    <td>Requirement of just witnesses and confession</td>
                  </tr>
                  <tr>
                    <td>Qisas Crimes</td>
                    <td>Prove lack of intent or existence of doubt</td>
                    <td>Perpetrator's intent and type of weapon used</td>
                  </tr>
                  <tr>
                    <td>Tazir Crimes</td>
                    <td>Focus on crime and perpetrator circumstances</td>
                    <td>Previous records and mitigating circumstances</td>
                  </tr>
                  <tr>
                    <td>Cyber Crimes</td>
                    <td>Challenge digital evidence</td>
                    <td>Digital evidence integrity and collection methods</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div class="section">
              <h2>Pre-Trial Procedures</h2>
              <p>There are important procedures to be taken before trial begins to ensure effective defense:</p>
              
              <ol class="step-list">
                <li><strong>Case Study:</strong> Comprehensive study of case file and evidence</li>
                <li><strong>Evidence Collection:</strong> Gathering evidence supporting defense</li>
                <li><strong>Witness Interrogation:</strong> Preparing to interrogate prosecution witnesses</li>
                <li><strong>Preparing Defenses:</strong> Preparing legal and substantive defenses</li>
                <li><strong>Expert Consultation:</strong> Consulting specialized experts</li>
              </ol>
            </div>
  
            <div class="section">
              <h2>Pleading Strategies</h2>
              
              <div class="defense-strategies">
                <div class="strategy-box">
                  <h4>Pleading Preparation</h4>
                  <ul>
                    <li>Organizing arguments and evidence logically</li>
                    <li>Preparing responses to prosecution claims</li>
                    <li>Preparing questions for witnesses</li>
                    <li>Preparing legal defenses</li>
                  </ul>
                </div>
                
                <div class="strategy-box">
                  <h4>During Pleading</h4>
                  <ul>
                    <li>Present facts clearly and logically</li>
                    <li>Focus on weaknesses in prosecution's case</li>
                    <li>Use evidence effectively</li>
                    <li>Respect court and procedures</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div class="section">
              <h2>Handling Aggravating and Mitigating Circumstances</h2>
              
              <h3>Mitigating Circumstances</h3>
              <ul>
                <li><strong>Good Conduct:</strong> No previous criminal record</li>
                <li><strong>Personal Circumstances:</strong> Age and social status</li>
                <li><strong>Remorse:</strong> Showing remorse and repentance</li>
                <li><strong>Cooperation:</strong> Cooperating with authorities</li>
                <li><strong>Right Restoration:</strong> Returning rights to owners</li>
              </ul>
  
              <h3>Avoiding Aggravating Circumstances</h3>
              <div class="warning-box">
                <h4>Circumstances to Avoid</h4>
                <ul>
                  <li>Recidivism or crime repetition</li>
                  <li>Use of violence or threats</li>
                  <li>Committing crime in organized manner</li>
                  <li>Exploiting position or influence</li>
                  <li>Causing serious harm to society</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>Important Tips for Defendants and Their Families</h2>
              
              <div class="tip-box">
                <h4>For Defendants</h4>
                <ul>
                  <li>Seek qualified and specialized lawyer immediately upon learning of charges</li>
                  <li>Don't make any statements before consulting lawyer</li>
                  <li>Maintain your right to silence if it's in your interest</li>
                  <li>Cooperate with your lawyer and provide all information</li>
                  <li>Respect court procedures and judges</li>
                </ul>
              </div>
  
              <div class="tip-box">
                <h4>For Families</h4>
                <ul>
                  <li>Look for lawyer specialized in criminal cases</li>
                  <li>Collect all useful documents and evidence</li>
                  <li>Provide moral and financial support to defendant</li>
                  <li>Communicate with lawyer regularly</li>
                  <li>Ensure attendance at trial sessions</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>Appeals and Challenging Judgments</h2>
              <p>Defendants have the right to challenge judgments issued against them according to specified procedures:</p>
              
              <h3>Grounds for Appeal</h3>
              <ul>
                <li><strong>Error in Law Application:</strong> Incorrect application of legal texts</li>
                <li><strong>Procedural Error:</strong> Violation of legal procedures</li>
                <li><strong>Error in Evidence Assessment:</strong> Incorrect assessment of presented evidence</li>
                <li><strong>Lack of Reasoning:</strong> Insufficient reasoning in judgment</li>
              </ul>
  
              <div class="tip-box">
                <h4>Tips for Successful Appeal</h4>
                <ul>
                  <li>Submit appeal within specified deadlines</li>
                  <li>Accurately specify grounds for appeal</li>
                  <li>Present new evidence if available</li>
                  <li>Seek assistance from lawyer specialized in appeals</li>
                </ul>
              </div>
            </div>
  
            <div class="article-footer">
              <p><strong>Note:</strong> This article provides general information and does not replace specialized legal consultation. It is recommended to consult with a lawyer specialized in criminal law for accurate legal advice suitable to each case's circumstances.</p>
            </div>
          </div>
        `,
      },
    category: "criminal",
    categoryName: "الجنائي / Criminal",
    date: "2024-01-20",
    readTimeAr: "8 دقائق",
    readTimeEn: "8 min read",
    authorAr: "المحامي عبدالرحمن الهرمودي",
    authorEn: "Lawyer Abdulrahman Al-Harmoudi",
    image: blog_4.src,
  },
  {
    id: 5,
    slug: "contract-drafting-essentials-uae",
    titleAr: "أساسيات صياغة العقود في الإمارات",
    titleEn: "Contract Drafting Essentials in the UAE",
    excerptAr:
      "دليل عملي ومفصل لصياغة العقود وفق النظام الإماراتي، يشمل الأركان والشروط الأساسية والبنود الجوهرية وبنود حماية المخاطر، مع خطوات الصياغة الصحيحة والامتثال الشرعي والنظامي وآليات حل النزاعات.",
    excerptEn:
      "A practical, detailed guide to drafting contracts under UAE law, covering core elements and conditions, essential and risk-protection clauses, proper drafting steps, Sharia and legal compliance, and dispute resolution mechanisms.",
    content: {
      ar: `
        <style>
          .contract-essentials-article {
            font-family: 'Times New Roman', serif;
            line-height: 1.7;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .article-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #333;
          }
          .article-title {
            font-size: 2.2em;
            margin: 0 0 10px 0;
            font-weight: bold;
            color: #222;
          }
          .article-subtitle {
            font-size: 1.1em;
            color: #666;
            margin: 0;
            font-style: italic;
          }
          .section {
            margin: 30px 0;
          }
          .section h2 {
            color: #222;
            font-size: 1.6em;
            margin: 30px 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
          }
          .section h3 {
            color: #333;
            font-size: 1.3em;
            margin: 25px 0 10px 0;
            font-weight: bold;
          }
          .section h4 {
            color: #444;
            font-size: 1.1em;
            margin: 20px 0 8px 0;
            font-weight: bold;
          }
          .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
          }
          .box {
            padding: 20px;
            border: 1px solid #ddd;
            background: #f9f9f9;
          }
          .box h4 {
            margin: 0 0 15px 0;
            font-size: 1.2em;
            color: #222;
            font-weight: bold;
          }
          .highlight-box {
            background: #f5f5f5;
            border: 1px solid #ccc;
            padding: 20px;
            margin: 20px 0;
          }
          .highlight-box h3 {
            color: #222;
            margin-top: 0;
            font-weight: bold;
          }
          .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border: 1px solid #ccc;
          }
          .comparison-table th {
            background: #f0f0f0;
            color: #222;
            padding: 12px;
            text-align: right;
            font-weight: bold;
            border: 1px solid #ccc;
          }
          .comparison-table td {
            padding: 10px 12px;
            border: 1px solid #ccc;
            text-align: right;
          }
          .comparison-table tr:nth-child(even) {
            background: #f9f9f9;
          }
          .step-list {
            counter-reset: step-counter;
            list-style: none;
            padding: 0;
          }
          .step-list li {
            counter-increment: step-counter;
            margin: 10px 0;
            padding: 15px;
            background: #f9f9f9;
            border-right: 3px solid #333;
            position: relative;
            padding-right: 50px;
          }
          .step-list li::before {
            content: counter(step-counter);
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            background: #333;
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.9em;
          }
          .warning-box {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            padding: 15px;
            margin: 20px 0;
          }
          .warning-box h4 {
            color: #856404;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .tip-box {
            background: #d1ecf1;
            border: 1px solid #bee5eb;
            padding: 15px;
            margin: 20px 0;
          }
          .tip-box h4 {
            color: #0c5460;
            margin: 0 0 10px 0;
            font-weight: bold;
          }
          .article-footer {
            background: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 20px;
            margin-top: 40px;
            text-align: center;
          }
          .article-footer p {
            margin: 0;
            font-size: 0.9em;
            color: #666;
          }
          @media (max-width: 768px) {
            .grid-2 {
              grid-template-columns: 1fr;
            }
            .article-title {
              font-size: 1.8em;
            }
          }
          /* Dark mode */
          .dark .contract-essentials-article { color: #e5e5e5; }
          .dark .article-header { border-bottom-color: #e5e5e5; }
          .dark .article-title { color: #ffffff; }
          .dark .article-subtitle { color: #b3b3b3; }
          .dark .section h2 { color: #ffffff; border-bottom-color: #404040; }
          .dark .section h3 { color: #e5e5e5; }
          .dark .section h4 { color: #d1d1d1; }
          .dark .box { background: #2a2a2a; border-color: #404040; }
          .dark .box h4 { color: #ffffff; }
          .dark .highlight-box { background: #2a2a2a; border-color: #404040; }
          .dark .highlight-box h3 { color: #ffffff; }
          .dark .comparison-table { border-color: #404040; }
          .dark .comparison-table th { background: #404040; color: #ffffff; border-color: #404040; }
          .dark .comparison-table td { border-color: #404040; }
          .dark .comparison-table tr:nth-child(even) { background: #2a2a2a; }
          .dark .step-list li { background: #2a2a2a; border-left-color: #e5e5e5; }
          .dark .step-list li::before { background: #e5e5e5; color: #000000; }
          .dark .warning-box { background: #3d2f00; border-color: #6b4c00; }
          .dark .warning-box h4 { color: #ffd700; }
          .dark .tip-box { background: #0d2d3a; border-color: #1a4a5c; }
          .dark .tip-box h4 { color: #87ceeb; }
          .dark .article-footer { background: #2a2a2a; border-color: #404040; }
          .dark .article-footer p { color: #b3b3b3; }
        </style>

        <div class="contract-essentials-article">
          <div class="article-header">
            <h1 class="article-title">أساسيات صياغة العقود في الإمارات</h1>
            <p class="article-subtitle">دليل عملي لصياغة العقود وفق الشريعة والأنظمة الإماراتية</p>
          </div>

          <div class="section">
            <h2>مقدمة</h2>
            <p>تحمي الصياغة القانونية الصحيحة حقوق الأطراف وتمنع النزاعات المستقبلية. يركز هذا الدليل على العناصر الأساسية لصياغة العقود التجارية والمدنية في دولة الإمارات العربية المتحدة، مع إبراز البنود الجوهرية وبنود حماية المخاطر وآليات حل النزاعات.</p>
            <div class="highlight-box">
              <h3>أهداف هذا الدليل</h3>
              <ul>
                <li>التعريف بالأركان والشروط الأساسية للعقد</li>
                <li>استعراض البنود الجوهرية وبنود حماية المخاطر</li>
                <li>شرح خطوات الصياغة العملية</li>
                <li>تعزيز الامتثال الشرعي والنظامي</li>
                <li>تحديد آليات تسوية النزاعات</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>الأركان والشروط الأساسية</h2>
            <div class="grid-2">
              <div class="box">
                <h4>أركان العقد</h4>
                <ul>
                  <li><strong>العاقدان:</strong> أهلية قانونية ورضا سليم</li>
                  <li><strong>المحل:</strong> مشروع وممكن ومحدد</li>
                  <li><strong>الصيغة:</strong> إيجاب وقبول مطابقان</li>
                  <li><strong>السبب:</strong> غرض مشروع وغير مخالف للنظام</li>
                </ul>
              </div>
              <div class="box">
                <h4>شروط الصحة</h4>
                <ul>
                  <li>خلو العقد من الغرر والجهالة الفاحشة</li>
                  <li>وضوح الالتزامات والمقابل</li>
                  <li>عدم مخالفة الشريعة والأنظمة</li>
                  <li>تحديد المدد والآليات التنفيذية</li>
                </ul>
              </div>
            </div>
            <div class="warning-box">
              <h4>تحذير</h4>
              <p>النقص الجوهري في أي ركن أو وجود شرط محظور شرعاً أو نظاماً قد يؤدي إلى بطلان العقد أو عدم إنفاذه.</p>
            </div>
          </div>

          <div class="section">
            <h2>أنواع العقود الشائعة</h2>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>النوع</th>
                  <th>الوصف</th>
                  <th>أمثلة</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>عقود تجارية</td>
                  <td>تنظم معاملات تجارية بين التجار</td>
                  <td>البيع، التوريد، الوكالة، التوزيع</td>
                </tr>
                <tr>
                  <td>عقود مدنية</td>
                  <td>معاملات بين الأفراد لأغراض غير تجارية</td>
                  <td>الإيجار، المقاولة، الخدمات</td>
                </tr>
                <tr>
                  <td>عقود عمل</td>
                  <td>تنظم علاقة العمل والالتزامات المتبادلة</td>
                  <td>التوظيف، الاستشارات</td>
                </tr>
                <tr>
                  <td>عقود إلكترونية</td>
                  <td>تُبرم عبر الوسائل الإلكترونية</td>
                  <td>التجارة الإلكترونية، الخدمات الرقمية</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="section">
            <h2>خطوات الصياغة العملية</h2>
            <ol class="step-list">
              <li><strong>تحديد الأطراف والصفة النظامية:</strong> بيانات الهوية/السجل التجاري والممثل النظامي</li>
              <li><strong>توصيف المحل والمخرجات:</strong> تحديد موضوع العقد والمواصفات</li>
              <li><strong>صياغة الالتزامات:</strong> التزامات كل طرف وآجال التنفيذ</li>
              <li><strong>المقابل المالي:</strong> الأسعار، جداول الدفع، الضرائب/الزكاة إن وجدت</li>
              <li><strong>بنود الحماية:</strong> السرية، عدم المنافسة، الملكية الفكرية</li>
              <li><strong>آليات النزاع:</strong> الوساطة/التحكيم/القضاء والاختصاص</li>
              <li><strong>المراجعة والمواءمة:</strong> فحص التوافق الشرعي والنظامي</li>
              <li><strong>التوقيع والتوثيق:</strong> التوقيع المعتمد والتوثيق عند اللزوم</li>
            </ol>
          </div>

          <div class="section">
            <h2>بنود أساسية لا بد منها</h2>
            <div class="grid-2">
              <div class="box">
                <h4>الجوهرية</h4>
                <ul>
                  <li>التعاريف والتفسير</li>
                  <li>نطاق العمل/المحل</li>
                  <li>المدة والإنهاء</li>
                  <li>المقابل المالي والدفع</li>
                  <li>المخاطر والقوة القاهرة</li>
                </ul>
              </div>
              <div class="box">
                <h4>حماية المخاطر</h4>
                <ul>
                  <li>الضمانات والتعهدات</li>
                  <li>السرية وحماية البيانات</li>
                  <li>الملكية الفكرية ونتائج العمل</li>
                  <li>التعويض وحدود المسؤولية</li>
                  <li>التأمينات والضمانات البنكية</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>الشروط الواجب تجنبها</h2>
            <div class="warning-box">
              <h4>محظورات شرعية ونظامية</h4>
              <ul>
                <li>الشروط الربوية أو الفوائد المحرمة</li>
                <li>الغرر الفاحش والجهالة</li>
                <li>الشروط التعسفية غير المتوازنة</li>
                <li>الإضرار دون مصلحة مشروعة</li>
                <li>التحايل على الأنظمة النافذة</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>الامتثال الشرعي والنظامي</h2>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>المجال</th>
                  <th>متطلبات رئيسية</th>
                  <th>الجهة المختصة</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>التجاري</td>
                  <td>الامتثال لنظام الشركات والتجارة</td>
                  <td>وزارة التجارة</td>
                </tr>
                <tr>
                  <td>العمل</td>
                  <td>الامتثال لنظام العمل واللوائح</td>
                  <td>وزارة الموارد البشرية</td>
                </tr>
                <tr>
                  <td>العقار</td>
                  <td>الامتثال لأنظمة الإيجار والرهن</td>
                  <td>وزارة العدل</td>
                </tr>
                <tr>
                  <td>الإلكتروني</td>
                  <td>الامتثال لنظام التعاملات الإلكترونية</td>
                  <td>وزارة التجارة</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="section">
            <h2>تسوية النزاعات</h2>
            <ul>
              <li><strong>التفاوض والوساطة:</strong> كمرحلة أولى قبل التصعيد</li>
              <li><strong>التحكيم:</strong> تحديد المقر والقواعد واللغة وعدد المحكمين</li>
              <li><strong>الاختصاص القضائي:</strong> تحديد المحكمة المختصة والقانون الواجب التطبيق</li>
            </ul>
            <div class="tip-box">
              <h4>نصيحة</h4>
              <p>ضع بنداً يحدد تسلسل آليات التسوية ومهل الإخطار وجمع المستندات، لتقليل التعطيل وتقوية قابلية التنفيذ.</p>
            </div>
          </div>

          <div class="section">
            <h2>التوقيع والتوثيق</h2>
            <div class="grid-2">
              <div class="box">
                <h4>تقليدي</h4>
                <ul>
                  <li>التوقيع الخطي أمام الشهود</li>
                  <li>التوثيق لدى كاتب العدل (عند اللزوم)</li>
                  <li>الختم الرسمي وحفظ النسخ</li>
                </ul>
              </div>
              <div class="box">
                <h4>إلكتروني</h4>
                <ul>
                  <li>التوقيع الإلكتروني المعتمد</li>
                  <li>الطوابع الزمنية والسجلات الرقمية</li>
                  <li>المنصات الحكومية المعتمدة</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>نصائح عملية</h2>
            <div class="tip-box">
              <h4>أفضل الممارسات</h4>
              <ul>
                <li>إعداد مسودة بنسخة تعقب التغييرات</li>
                <li>استخدام التعاريف لتجنب اللبس</li>
                <li>تحديد معايير الأداء ومؤشرات القياس</li>
                <li>تضمين خطة إدارة التغيير</li>
                <li>مراجعة نهائية من مستشار متخصص</li>
              </ul>
            </div>
          </div>

          <div class="article-footer">
            <p><strong>ملاحظة:</strong> هذا الدليل معلومات عامة ولا يُغني عن الاستشارة القانونية المتخصصة.</p>
          </div>
        </div>
      `,
      en: `
        <style>
          .contract-essentials-article {
            font-family: 'Times New Roman', serif;
            line-height: 1.7;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          .article-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 2px solid #333;
          }
          .article-title {
            font-size: 2.2em;
            margin: 0 0 10px 0;
            font-weight: bold;
            color: #222;
          }
          .article-subtitle {
            font-size: 1.1em;
            color: #666;
            margin: 0;
            font-style: italic;
          }
          .section { margin: 30px 0; }
          .section h2 {
            color: #222;
            font-size: 1.6em;
            margin: 30px 0 15px 0;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
            font-weight: bold;
          }
          .section h3 { color: #333; font-size: 1.3em; margin: 25px 0 10px 0; font-weight: bold; }
          .section h4 { color: #444; font-size: 1.1em; margin: 20px 0 8px 0; font-weight: bold; }
          .grid-2 {
            display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin: 20px 0;
          }
          .box { padding: 20px; border: 1px solid #ddd; background: #f9f9f9; }
          .box h4 { margin: 0 0 15px 0; font-size: 1.2em; color: #222; font-weight: bold; }
          .highlight-box { background: #f5f5f5; border: 1px solid #ccc; padding: 20px; margin: 20px 0; }
          .highlight-box h3 { color: #222; margin-top: 0; font-weight: bold; }
          .comparison-table { width: 100%; border-collapse: collapse; margin: 20px 0; border: 1px solid #ccc; }
          .comparison-table th {
            background: #f0f0f0; color: #222; padding: 12px; text-align: left; font-weight: bold; border: 1px solid #ccc;
          }
          .comparison-table td { padding: 10px 12px; border: 1px solid #ccc; text-align: left; }
          .comparison-table tr:nth-child(even) { background: #f9f9f9; }
          .step-list { counter-reset: step-counter; list-style: none; padding: 0; }
          .step-list li {
            counter-increment: step-counter; margin: 10px 0; padding: 15px; background: #f9f9f9; border-left: 3px solid #333;
            position: relative; padding-left: 50px;
          }
          .step-list li::before {
            content: counter(step-counter);
            position: absolute; left: 15px; top: 50%; transform: translateY(-50%);
            background: #333; color: white; width: 25px; height: 25px; border-radius: 50%;
            display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9em;
          }
          .warning-box { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; margin: 20px 0; }
          .warning-box h4 { color: #856404; margin: 0 0 10px 0; font-weight: bold; }
          .tip-box { background: #d1ecf1; border: 1px solid #bee5eb; padding: 15px; margin: 20px 0; }
          .tip-box h4 { color: #0c5460; margin: 0 0 10px 0; font-weight: bold; }
          .article-footer { background: #f8f9fa; border: 1px solid #dee2e6; padding: 20px; margin-top: 40px; text-align: center; }
          .article-footer p { margin: 0; font-size: 0.9em; color: #666; }
          @media (max-width: 768px) {
            .grid-2 { grid-template-columns: 1fr; }
            .article-title { font-size: 1.8em; }
          }
          /* Dark mode */
          .dark .contract-essentials-article { color: #e5e5e5; }
          .dark .article-header { border-bottom-color: #e5e5e5; }
          .dark .article-title { color: #ffffff; }
          .dark .article-subtitle { color: #b3b3b3; }
          .dark .section h2 { color: #ffffff; border-bottom-color: #404040; }
          .dark .section h3 { color: #e5e5e5; }
          .dark .section h4 { color: #d1d1d1; }
          .dark .box { background: #2a2a2a; border-color: #404040; }
          .dark .box h4 { color: #ffffff; }
          .dark .highlight-box { background: #2a2a2a; border-color: #404040; }
          .dark .highlight-box h3 { color: #ffffff; }
          .dark .comparison-table { border-color: #404040; }
          .dark .comparison-table th { background: #404040; color: #ffffff; border-color: #404040; }
          .dark .comparison-table td { border-color: #404040; }
          .dark .comparison-table tr:nth-child(even) { background: #2a2a2a; }
          .dark .step-list li { background: #2a2a2a; border-left-color: #e5e5e5; }
          .dark .step-list li::before { background: #e5e5e5; color: #000000; }
          .dark .warning-box { background: #3d2f00; border-color: #6b4c00; }
          .dark .warning-box h4 { color: #ffd700; }
          .dark .tip-box { background: #0d2d3a; border-color: #1a4a5c; }
          .dark .tip-box h4 { color: #87ceeb; }
          .dark .article-footer { background: #2a2a2a; border-color: #404040; }
          .dark .article-footer p { color: #b3b3b3; }
        </style>

        <div class="contract-essentials-article">
          <div class="article-header">
            <h1 class="article-title">Contract Drafting Essentials in the UAE</h1>
            <p class="article-subtitle">A practical guide to drafting enforceable contracts under UAE law</p>
          </div>

          <div class="section">
            <h2>Introduction</h2>
            <p>Proper legal drafting protects parties’ rights and prevents future disputes. This guide covers the core elements of drafting commercial and civil contracts in the United Arab Emirates, highlighting essential clauses, risk-protection provisions, and dispute resolution mechanisms.</p>
            <div class="highlight-box">
              <h3>Guide Objectives</h3>
              <ul>
                <li>Identify contract elements and validity conditions</li>
                <li>Outline essential and risk-protection clauses</li>
                <li>Explain practical drafting steps</li>
                <li>Reinforce Sharia and legal compliance</li>
                <li>Define dispute resolution frameworks</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>Core Elements and Validity</h2>
            <div class="grid-2">
              <div class="box">
                <h4>Contract Elements</h4>
                <ul>
                  <li><strong>Parties:</strong> Legal capacity and valid authority</li>
                  <li><strong>Subject Matter:</strong> Lawful, possible, and determined</li>
                  <li><strong>Form:</strong> Matching offer and acceptance</li>
                  <li><strong>Cause:</strong> Legitimate purpose not contrary to law</li>
                </ul>
              </div>
              <div class="box">
                <h4>Validity Conditions</h4>
                <ul>
                  <li>Free, informed consent</li>
                  <li>No excessive uncertainty or ambiguity</li>
                  <li>Clear obligations and consideration</li>
                  <li>Defined timelines and performance standards</li>
                </ul>
              </div>
            </div>
            <div class="warning-box">
              <h4>Warning</h4>
              <p>Material deficiency in any element, or prohibited terms under Sharia or law, may render the contract void or unenforceable.</p>
            </div>
          </div>

          <div class="section">
            <h2>Common Contract Types</h2>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Commercial</td>
                  <td>Transactions between merchants or for trade</td>
                  <td>Sale, supply, agency, distribution</td>
                </tr>
                <tr>
                  <td>Civil</td>
                  <td>Non-commercial arrangements between individuals</td>
                  <td>Lease, contracting, services</td>
                </tr>
                <tr>
                  <td>Employment</td>
                  <td>Employment relationship and mutual obligations</td>
                  <td>Employment, consulting</td>
                </tr>
                <tr>
                  <td>Electronic</td>
                  <td>Concluded via electronic means</td>
                  <td>E-commerce, digital services</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="section">
            <h2>Practical Drafting Steps</h2>
            <ol class="step-list">
              <li><strong>Identify parties and authority:</strong> IDs/CR and authorized signatory</li>
              <li><strong>Describe scope and deliverables:</strong> Clear subject matter and specs</li>
              <li><strong>Draft obligations:</strong> Each party’s duties and timelines</li>
              <li><strong>Commercial terms:</strong> Prices, payment schedules, taxes/Zakat if applicable</li>
              <li><strong>Protection terms:</strong> Confidentiality, non-compete, IP</li>
              <li><strong>Dispute framework:</strong> Mediation/arbitration/courts and jurisdiction</li>
              <li><strong>Compliance review:</strong> Sharia and legal alignment</li>
              <li><strong>Execution:</strong> Authorized signatures and authentication</li>
            </ol>
          </div>

          <div class="section">
            <h2>Essential Clauses</h2>
            <div class="grid-2">
              <div class="box">
                <h4>Core</h4>
                <ul>
                  <li>Definitions and interpretation</li>
                  <li>Scope of work/subject matter</li>
                  <li>Term and termination</li>
                  <li>Consideration and payment</li>
                  <li>Risk and force majeure</li>
                </ul>
              </div>
              <div class="box">
                <h4>Risk Protection</h4>
                <ul>
                  <li>Representations and warranties</li>
                  <li>Confidentiality and data protection</li>
                  <li>Intellectual property and work results</li>
                  <li>Indemnity and liability caps</li>
                  <li>Insurance and bank guarantees</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Terms to Avoid</h2>
            <div class="warning-box">
              <h4>Prohibited/Abusive</h4>
              <ul>
                <li>Usurious interest or prohibited charges</li>
                <li>Excessive uncertainty/ambiguity</li>
                <li>Unbalanced, oppressive terms</li>
                <li>Harm without legitimate interest</li>
                <li>Attempts to circumvent applicable laws</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>Sharia and Legal Compliance</h2>
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Key Requirements</th>
                  <th>Authority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Commercial</td>
                  <td>Compliance with Companies and Commerce Laws</td>
                  <td>Ministry of Commerce</td>
                </tr>
                <tr>
                  <td>Labor</td>
                  <td>Compliance with UAE Labor Law</td>
                  <td>Ministry of Human Resources</td>
                </tr>
                <tr>
                  <td>Real Estate</td>
                  <td>Compliance with lease and mortgage regulations</td>
                  <td>Ministry of Justice</td>
                </tr>
                <tr>
                  <td>Electronic</td>
                  <td>Compliance with Electronic Transactions Law</td>
                  <td>Ministry of Commerce</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="section">
            <h2>Dispute Resolution</h2>
            <ul>
              <li><strong>Negotiation/Mediation:</strong> Prefer a pre-escalation tier</li>
              <li><strong>Arbitration:</strong> Seat, rules, language, number of arbitrators</li>
              <li><strong>Courts:</strong> Competent jurisdiction and applicable law</li>
            </ul>
            <div class="tip-box">
              <h4>Tip</h4>
              <p>Set a clear sequence of steps, notice periods, and document exchange to reduce disruption and improve enforceability.</p>
            </div>
          </div>

          <div class="section">
            <h2>Execution and Authentication</h2>
            <div class="grid-2">
              <div class="box">
                <h4>Traditional</h4>
                <ul>
                  <li>Wet-ink signatures before witnesses</li>
                  <li>Notarization where required</li>
                  <li>Official seals and records retention</li>
                </ul>
              </div>
              <div class="box">
                <h4>Electronic</h4>
                <ul>
                  <li>Qualified e-signatures</li>
                  <li>Digital timestamps and logs</li>
                  <li>Government-certified platforms</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Practical Tips</h2>
            <div class="tip-box">
              <h4>Best Practices</h4>
              <ul>
                <li>Redline control and versioning</li>
                <li>Use definitions to prevent ambiguity</li>
                <li>Define KPIs and acceptance criteria</li>
                <li>Include change management procedures</li>
                <li>Have a specialist legal review</li>
              </ul>
            </div>
          </div>

          <div class="article-footer">
            <p><strong>Note:</strong> This guide is general information and does not replace specialized legal advice.</p>
          </div>
        </div>
      `,
    },
    category: "business",
    categoryName: "القانون التجاري / Business Law",
    date: "2024-01-18",
    readTimeAr: "9 دقائق",
    readTimeEn: "9 min read",
    authorAr: "المحامي عبدالرحمن الهرمودي",
    authorEn: "Lawyer Abdulrahman Al-Harmoudi",
    image: blog_5.src,
  },
  {
    id: 6,
    slug: "litigation-arbitration-uae",
    titleAr: "التقاضي والتحكيم في الإمارات",
    titleEn: "Litigation and Arbitration in the UAE",
    excerptAr:
      "دليل شامل ومفصل لإجراءات التقاضي والتحكيم في النظام القضائي السعودي وطرق حل النزاعات، يتضمن شرحاً وافياً لجميع أنواع المحاكم والإجراءات القانونية مع مزايا وعيوب كل طريقة. يغطي هذا الدليل جميع مراحل التقاضي من رفع الدعوى إلى تنفيذ الأحكام، مع شرح مفصل لإجراءات التحكيم وطرق حل النزاعات البديلة، مع نصائح عملية مهمة لضمان نجاح العملية القانونية وتحقيق أفضل النتائج.",
    excerptEn:
      "A comprehensive and detailed guide to litigation and arbitration procedures in the UAE judicial system and dispute resolution methods, including thorough explanations of all types of courts and legal procedures with advantages and disadvantages of each method. This guide covers all stages of litigation from filing lawsuits to judgment enforcement, with detailed explanations of arbitration procedures and alternative dispute resolution methods, with important practical tips to ensure successful legal proceedings and achieve the best results.",
      content: {
        ar: `
          <style>
            .contract-drafting-article {
              font-family: 'Times New Roman', serif;
              line-height: 1.7;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .article-header {
              text-align: center;
              margin-bottom: 40px;
              padding-bottom: 20px;
              border-bottom: 2px solid #333;
            }
            .article-title {
              font-size: 2.2em;
              margin: 0 0 10px 0;
              font-weight: bold;
              color: #222;
            }
            .article-subtitle {
              font-size: 1.1em;
              color: #666;
              margin: 0;
              font-style: italic;
            }
            .section {
              margin: 30px 0;
            }
            .section h2 {
              color: #222;
              font-size: 1.6em;
              margin: 30px 0 15px 0;
              padding-bottom: 8px;
              border-bottom: 1px solid #ccc;
              font-weight: bold;
            }
            .section h3 {
              color: #333;
              font-size: 1.3em;
              margin: 25px 0 10px 0;
              font-weight: bold;
            }
            .section h4 {
              color: #444;
              font-size: 1.1em;
              margin: 20px 0 8px 0;
              font-weight: bold;
            }
            .contract-elements {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 30px;
              margin: 20px 0;
            }
            .element-box, .principle-box {
              padding: 20px;
              border: 1px solid #ddd;
              background: #f9f9f9;
            }
            .element-box h4, .principle-box h4 {
              margin: 0 0 15px 0;
              font-size: 1.2em;
              color: #222;
              font-weight: bold;
            }
            .highlight-box {
              background: #f5f5f5;
              border: 1px solid #ccc;
              padding: 20px;
              margin: 20px 0;
            }
            .highlight-box h3 {
              color: #222;
              margin-top: 0;
              font-weight: bold;
            }
            .comparison-table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
              border: 1px solid #ccc;
            }
            .comparison-table th {
              background: #f0f0f0;
              color: #222;
              padding: 12px;
              text-align: right;
              font-weight: bold;
              border: 1px solid #ccc;
            }
            .comparison-table td {
              padding: 10px 12px;
              border: 1px solid #ccc;
              text-align: right;
            }
            .comparison-table tr:nth-child(even) {
              background: #f9f9f9;
            }
            .step-list {
              counter-reset: step-counter;
              list-style: none;
              padding: 0;
            }
            .step-list li {
              counter-increment: step-counter;
              margin: 10px 0;
              padding: 15px;
              background: #f9f9f9;
              border-right: 3px solid #333;
              position: relative;
              padding-right: 50px;
            }
            .step-list li::before {
              content: counter(step-counter);
              position: absolute;
              right: 15px;
              top: 50%;
              transform: translateY(-50%);
              background: #333;
              color: white;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 0.9em;
            }
            .warning-box {
              background: #fff3cd;
              border: 1px solid #ffeaa7;
              padding: 15px;
              margin: 20px 0;
            }
            .warning-box h4 {
              color: #856404;
              margin: 0 0 10px 0;
              font-weight: bold;
            }
            .tip-box {
              background: #d1ecf1;
              border: 1px solid #bee5eb;
              padding: 15px;
              margin: 20px 0;
            }
            .tip-box h4 {
              color: #0c5460;
              margin: 0 0 10px 0;
              font-weight: bold;
            }
            .article-footer {
              background: #f8f9fa;
              border: 1px solid #dee2e6;
              padding: 20px;
              margin-top: 40px;
              text-align: center;
            }
            .article-footer p {
              margin: 0;
              font-size: 0.9em;
              color: #666;
            }
            @media (max-width: 768px) {
              .contract-elements {
                grid-template-columns: 1fr;
              }
              .article-title {
                font-size: 1.8em;
              }
            }
            
            /* Dark mode styles - using parent dark class */
            .dark .contract-drafting-article {
              color: #e5e5e5;
            }
            .dark .article-header {
              border-bottom-color: #e5e5e5;
            }
            .dark .article-title {
              color: #ffffff;
            }
            .dark .article-subtitle {
              color: #b3b3b3;
            }
            .dark .section h2 {
              color: #ffffff;
              border-bottom-color: #404040;
            }
            .dark .section h3 {
              color: #e5e5e5;
            }
            .dark .section h4 {
              color: #d1d1d1;
            }
            .dark .element-box, .dark .principle-box {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .element-box h4, .dark .principle-box h4 {
              color: #ffffff;
            }
            .dark .highlight-box {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .highlight-box h3 {
              color: #ffffff;
            }
            .dark .comparison-table {
              border-color: #404040;
            }
            .dark .comparison-table th {
              background: #404040;
              color: #ffffff;
              border-color: #404040;
            }
            .dark .comparison-table td {
              border-color: #404040;
            }
            .dark .comparison-table tr:nth-child(even) {
              background: #2a2a2a;
            }
            .dark .step-list li {
              background: #2a2a2a;
              border-left-color: #e5e5e5;
            }
            .dark .step-list li::before {
              background: #e5e5e5;
              color: #000000;
            }
            .dark .warning-box {
              background: #3d2f00;
              border-color: #6b4c00;
            }
            .dark .warning-box h4 {
              color: #ffd700;
            }
            .dark .tip-box {
              background: #0d2d3a;
              border-color: #1a4a5c;
            }
            .dark .tip-box h4 {
              color: #87ceeb;
            }
            .dark .article-footer {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .article-footer p {
              color: #b3b3b3;
            }
          </style>
          
          <div class="contract-drafting-article">
            <div class="article-header">
              <h1 class="article-title">أساسيات صياغة العقود في الإمارات</h1>
              <p class="article-subtitle">دليل شامل لصياغة العقود القانونية الصحيحة والفعالة</p>
            </div>
  
            <div class="section">
              <h2>مقدمة عن صياغة العقود في النظام الإماراتي</h2>
              <p>تعتبر صياغة العقود من أهم المهارات القانونية في الممارسة المهنية، حيث تتطلب فهماً عميقاً للقوانين الإماراتية وأحكام الشريعة الإسلامية. العقد الجيد هو الذي يحمي حقوق جميع الأطراف ويمنع النزاعات المستقبلية من خلال وضوح الشروط والالتزامات.</p>
              
              <div class="highlight-box">
                <h3>أهمية الصياغة القانونية الصحيحة</h3>
                <ul>
                  <li>حماية حقوق ومصالح جميع الأطراف</li>
                  <li>منع النزاعات والخلافات المستقبلية</li>
                  <li>ضمان الامتثال للقوانين الإماراتية</li>
                  <li>توضيح الالتزامات والحقوق بدقة</li>
                  <li>تسهيل عملية التنفيذ والمتابعة</li>
                  <li>تقليل المخاطر القانونية والمالية</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>أركان العقد في النظام الإماراتي</h2>
              <p>يجب أن يتضمن كل عقد الأركان الأساسية التي نص عليها النظام الإماراتي وأحكام الشريعة الإسلامية:</p>
              
              <div class="contract-elements">
                <div class="element-box">
                  <h4>الأركان الأساسية</h4>
                  <ul>
                    <li><strong>العاقدان:</strong> وجود طرفين أو أكثر مؤهلين للتعاقد</li>
                    <li><strong>محل العقد:</strong> الشيء أو الخدمة محل التعاقد</li>
                    <li><strong>الصيغة:</strong> الإيجاب والقبول بين الأطراف</li>
                    <li><strong>السبب:</strong> الغرض المشروع من التعاقد</li>
                  </ul>
                </div>
                
                <div class="element-box">
                  <h4>الشروط الصحيحة</h4>
                  <ul>
                    <li><strong>الأهلية:</strong> أهلية الأطراف للتعاقد</li>
                    <li><strong>الرضا:</strong> رضا الأطراف الحر والمستنير</li>
                    <li><strong>المشروعية:</strong> مشروعية محل وسبب العقد</li>
                    <li><strong>الوضوح:</strong> وضوح الشروط والالتزامات</li>
                  </ul>
                </div>
              </div>
  
              <div class="warning-box">
                <h4>تحذير مهم</h4>
                <p>أي نقص في الأركان الأساسية أو وجود شروط مخالفة للشريعة أو النظام يؤدي إلى بطلان العقد أو عدم إنفاذه قانونياً.</p>
              </div>
            </div>
  
            <div class="section">
              <h2>أنواع العقود الرئيسية</h2>
              
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>نوع العقد</th>
                    <th>الوصف</th>
                    <th>الاستخدامات الشائعة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>العقود التجارية</td>
                    <td>عقود بين التجار أو لأغراض تجارية</td>
                    <td>البيع، التوريد، التوزيع، الوكالة</td>
                  </tr>
                  <tr>
                    <td>العقود المدنية</td>
                    <td>عقود بين الأفراد لأغراض شخصية</td>
                    <td>الإيجار، البيع، الخدمات الشخصية</td>
                  </tr>
                  <tr>
                    <td>عقود العمل</td>
                    <td>عقود تنظم علاقة العمل</td>
                    <td>التوظيف، الاستشارات، المقاولات</td>
                  </tr>
                  <tr>
                    <td>العقود الإلكترونية</td>
                    <td>عقود تتم عبر الوسائل الإلكترونية</td>
                    <td>التجارة الإلكترونية، الخدمات الرقمية</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div class="section">
              <h2>خطوات صياغة العقد</h2>
              <p>تتم صياغة العقد وفق خطوات محددة لضمان الشمولية والدقة:</p>
              
              <ol class="step-list">
                <li><strong>تحديد نوع العقد:</strong> تحديد طبيعة العقد والقوانين المطبقة</li>
                <li><strong>جمع المعلومات:</strong> جمع جميع البيانات والمتطلبات</li>
                <li><strong>تحديد الأطراف:</strong> تحديد هوية الأطراف بدقة</li>
                <li><strong>صياغة المحتوى:</strong> كتابة بنود العقد بوضوح</li>
                <li><strong>المراجعة القانونية:</strong> مراجعة الامتثال للقوانين</li>
                <li><strong>المراجعة النهائية:</strong> مراجعة شاملة قبل التوقيع</li>
              </ol>
            </div>
  
            <div class="section">
              <h2>العناصر الأساسية لأي عقد</h2>
              
              <h3>الديباجة والمقدمة</h3>
              <ul>
                <li><strong>عنوان العقد:</strong> وصف واضح لنوع العقد</li>
                <li><strong>تاريخ التعاقد:</strong> التاريخ الهجري والميلادي</li>
                <li><strong>مكان التعاقد:</strong> المكان الذي تم فيه إبرام العقد</li>
                <li><strong>تعريف الأطراف:</strong> البيانات الكاملة لكل طرف</li>
              </ul>
  
              <h3>صلب العقد</h3>
              <div class="contract-elements">
                <div class="element-box">
                  <h4>البنود الأساسية</h4>
                  <ul>
                    <li>موضوع العقد ومحله</li>
                    <li>التزامات كل طرف</li>
                    <li>المقابل المالي والدفع</li>
                    <li>مدة العقد وتجديده</li>
                    <li>شروط التنفيذ</li>
                  </ul>
                </div>
                
                <div class="element-box">
                  <h4>البنود التكميلية</h4>
                  <ul>
                    <li>شروط الإنهاء والفسخ</li>
                    <li>تسوية النزاعات</li>
                    <li>القانون الواجب التطبيق</li>
                    <li>التعديل والتحديث</li>
                    <li>الضمانات والكفالات</li>
                  </ul>
                </div>
              </div>
  
              <h3>الخاتمة والتوقيع</h3>
              <ul>
                <li><strong>بند التوقيع:</strong> مكان وتاريخ التوقيع</li>
                <li><strong>الشهود:</strong> أسماء وتوقيعات الشهود (إن وجدوا)</li>
                <li><strong>التوثيق:</strong> ختم الكاتب بالعدل أو الموثق</li>
              </ul>
            </div>
  
            <div class="section">
              <h2>مبادئ الصياغة الصحيحة</h2>
              
              <div class="contract-elements">
                <div class="principle-box">
                  <h4>الوضوح والدقة</h4>
                  <ul>
                    <li>استخدام لغة واضحة ومفهومة</li>
                    <li>تجنب المصطلحات الغامضة</li>
                    <li>تحديد المفاهيم والمصطلحات</li>
                    <li>استخدام الأرقام والتواريخ بدقة</li>
                  </ul>
                </div>
                
                <div class="principle-box">
                  <h4>الشمولية والتوازن</h4>
                  <ul>
                    <li>تغطية جميع جوانب التعاقد</li>
                    <li>توازن الحقوق والالتزامات</li>
                    <li>معالجة الحالات الاستثنائية</li>
                    <li>وضع آليات لحل المشاكل</li>
                  </ul>
                </div>
              </div>
  
              <div class="tip-box">
                <h4>نصائح للصياغة الفعالة</h4>
                <ul>
                  <li>ابدأ بالعناصر الأساسية ثم انتقل للتفاصيل</li>
                  <li>استخدم الترقيم والتنسيق لتسهيل القراءة</li>
                  <li>تجنب التكرار والإطالة غير المبررة</li>
                  <li>راجع العقد من وجهة نظر كل طرف</li>
                  <li>تأكد من الاتساق في استخدام المصطلحات</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>الشروط الواجب تجنبها</h2>
              
              <div class="warning-box">
                <h4>شروط محظورة شرعاً ونظاماً</h4>
                <ul>
                  <li><strong>الشروط الربوية:</strong> أي شرط يتضمن ربا أو فوائد محرمة</li>
                  <li><strong>الغرر المفرط:</strong> الشروط المبهمة أو المجهولة</li>
                  <li><strong>الشروط الجزافية:</strong> العقوبات المفرطة وغير المبررة</li>
                  <li><strong>التلاعب:</strong> الشروط التي تهدف للخداع أو الغش</li>
                  <li><strong>الإضرار:</strong> الشروط التي تلحق ضرراً بلا مبرر</li>
                </ul>
              </div>
  
              <h3>شروط تعسفية يجب تجنبها</h3>
              <ul>
                <li>الإعفاء الكامل من المسؤولية دون مبرر</li>
                <li>منح طرف واحد حق الفسخ التعسفي</li>
                <li>تحديد غرامات مفرطة وغير متناسبة</li>
                <li>قصر حق التقاضي أو الدفاع</li>
                <li>التعديل الأحادي للشروط الجوهرية</li>
              </ul>
            </div>
  
            <div class="section">
              <h2>الامتثال للقوانين الإماراتية</h2>
              
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>المجال القانوني</th>
                    <th>المتطلبات الأساسية</th>
                    <th>الجهة المختصة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>العقود التجارية</td>
                    <td>الامتثال لنظام التجارة ولوائحه</td>
                    <td>وزارة التجارة</td>
                  </tr>
                  <tr>
                    <td>عقود العمل</td>
                    <td>الامتثال لنظام العمل السعودي</td>
                    <td>وزارة الموارد البشرية</td>
                  </tr>
                  <tr>
                    <td>العقود العقارية</td>
                    <td>الامتثال لأنظمة العقار والرهن</td>
                    <td>وزارة العدل</td>
                  </tr>
                  <tr>
                    <td>العقود الإلكترونية</td>
                    <td>الامتثال لنظام التعاملات الإلكترونية</td>
                    <td>وزارة التجارة</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div class="section">
              <h2>حل النزاعات في العقود</h2>
              
              <h3>آليات حل النزاعات</h3>
              <ul>
                <li><strong>التفاوض المباشر:</strong> الحل الأولي بين الأطراف</li>
                <li><strong>الوساطة:</strong> تدخل طرف ثالث محايد</li>
                <li><strong>التحكيم:</strong> اللجوء لمحكم أو هيئة تحكيم</li>
                <li><strong>القضاء:</strong> رفع الدعوى أمام المحاكم المختصة</li>
              </ul>
  
              <div class="tip-box">
                <h4>نصائح لتجنب النزاعات</h4>
                <ul>
                  <li>وضع آلية واضحة لحل الخلافات</li>
                  <li>تحديد القانون الواجب التطبيق</li>
                  <li>تحديد المحكمة أو جهة التحكيم المختصة</li>
                  <li>وضع مهل زمنية للإجراءات</li>
                  <li>تحديد اللغة المعتمدة للعقد</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>التوثيق والإثبات</h2>
              
              <h3>طرق التوثيق</h3>
              <div class="contract-elements">
                <div class="element-box">
                  <h4>التوثيق التقليدي</h4>
                  <ul>
                    <li>التوثيق لدى كاتب العدل</li>
                    <li>التوقيع أمام الشهود</li>
                    <li>الختم والتصديق الرسمي</li>
                    <li>التسجيل في السجلات الرسمية</li>
                  </ul>
                </div>
                
                <div class="element-box">
                  <h4>التوثيق الإلكتروني</h4>
                  <ul>
                    <li>التوقيع الإلكتروني المعتمد</li>
                    <li>الطوابع الزمنية الرقمية</li>
                    <li>شهادات التوثيق الإلكترونية</li>
                    <li>المنصات الحكومية المعتمدة</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div class="section">
              <h2>نماذج وقوالب العقود</h2>
              
              <h3>العقود النموذجية المتاحة</h3>
              <ul>
                <li><strong>عقود البيع:</strong> نماذج معتمدة لعقود البيع التجاري والمدني</li>
                <li><strong>عقود الإيجار:</strong> قوالب موحدة وفق النظام الجديد</li>
                <li><strong>عقود العمل:</strong> نماذج متوافقة مع نظام العمل</li>
                <li><strong>عقود الخدمات:</strong> قوالب للخدمات المهنية والتقنية</li>
              </ul>
  
              <div class="warning-box">
                <h4>تحذير من النماذج الجاهزة</h4>
                <p>لا تعتمد على النماذج الجاهزة دون تخصيصها لظروفك الخاصة، فكل عقد له خصوصيته التي تتطلب صياغة مناسبة.</p>
              </div>
            </div>
  
            <div class="section">
              <h2>نصائح عملية للممارسين</h2>
              
              <div class="tip-box">
                <h4>للمحامين والمستشارين</h4>
                <ul>
                  <li>احرص على فهم احتياجات العميل بدقة</li>
                  <li>ابحث في القوانين والأنظمة ذات الصلة</li>
                  <li>استخدم لغة قانونية دقيقة وواضحة</li>
                  <li>راجع العقد من الناحية الشرعية والنظامية</li>
                  <li>احتفظ بنسخة محدثة من جميع القوانين</li>
                </ul>
              </div>
  
              <div class="tip-box">
                <h4>للأطراف المتعاقدة</h4>
                <ul>
                  <li>لا توقع على عقد لم تفهمه بالكامل</li>
                  <li>استعن بمحامٍ متخصص عند الحاجة</li>
                  <li>احتفظ بنسخة أصلية من العقد</li>
                  <li>راجع جميع البنود والشروط بعناية</li>
                  <li>تأكد من صحة البيانات المدونة</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>التطورات الحديثة في صياغة العقود</h2>
              
              <h3>العقود الذكية والتقنيات الحديثة</h3>
              <ul>
                <li><strong>البلوك تشين:</strong> تقنية حفظ وتوثيق العقود</li>
                <li><strong>الذكاء الاصطناعي:</strong> مساعدة في صياغة ومراجعة العقود</li>
                <li><strong>التوقيع الرقمي:</strong> تطوير آليات التوقيع الإلكتروني</li>
                <li><strong>المنصات الرقمية:</strong> منصات متخصصة في إدارة العقود</li>
              </ul>
  
              <div class="highlight-box">
                <h3>مستقبل صياغة العقود</h3>
                <p>تشهد صياغة العقود تطوراً مستمراً مع التقدم التقني والتشريعي، مما يتطلب من الممارسين مواكبة هذه التطورات والاستفادة منها في تحسين الممارسة المهنية.</p>
              </div>
            </div>
  
            <div class="article-footer">
              <p><strong>ملاحظة:</strong> هذا المقال يقدم معلومات عامة ولا يغني عن الاستشارة القانونية المتخصصة. يُنصح بالاستعانة بمحامٍ متخصص في صياغة العقود للحصول على استشارة قانونية دقيقة تتناسب مع كل حالة.</p>
            </div>
          </div>
        `,
        en: `
          <style>
            .contract-drafting-article {
              font-family: 'Times New Roman', serif;
              line-height: 1.7;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .article-header {
              text-align: center;
              margin-bottom: 40px;
              padding-bottom: 20px;
              border-bottom: 2px solid #333;
            }
            .article-title {
              font-size: 2.2em;
              margin: 0 0 10px 0;
              font-weight: bold;
              color: #222;
            }
            .article-subtitle {
              font-size: 1.1em;
              color: #666;
              margin: 0;
              font-style: italic;
            }
            .section {
              margin: 30px 0;
            }
            .section h2 {
              color: #222;
              font-size: 1.6em;
              margin: 30px 0 15px 0;
              padding-bottom: 8px;
              border-bottom: 1px solid #ccc;
              font-weight: bold;
            }
            .section h3 {
              color: #333;
              font-size: 1.3em;
              margin: 25px 0 10px 0;
              font-weight: bold;
            }
            .section h4 {
              color: #444;
              font-size: 1.1em;
              margin: 20px 0 8px 0;
              font-weight: bold;
            }
            .contract-elements {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 30px;
              margin: 20px 0;
            }
            .element-box, .principle-box {
              padding: 20px;
              border: 1px solid #ddd;
              background: #f9f9f9;
            }
            .element-box h4, .principle-box h4 {
              margin: 0 0 15px 0;
              font-size: 1.2em;
              color: #222;
              font-weight: bold;
            }
            .highlight-box {
              background: #f5f5f5;
              border: 1px solid #ccc;
              padding: 20px;
              margin: 20px 0;
            }
            .highlight-box h3 {
              color: #222;
              margin-top: 0;
              font-weight: bold;
            }
            .comparison-table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
              border: 1px solid #ccc;
            }
            .comparison-table th {
              background: #f0f0f0;
              color: #222;
              padding: 12px;
              text-align: left;
              font-weight: bold;
              border: 1px solid #ccc;
            }
            .comparison-table td {
              padding: 10px 12px;
              border: 1px solid #ccc;
              text-align: left;
            }
            .comparison-table tr:nth-child(even) {
              background: #f9f9f9;
            }
            .step-list {
              counter-reset: step-counter;
              list-style: none;
              padding: 0;
            }
            .step-list li {
              counter-increment: step-counter;
              margin: 10px 0;
              padding: 15px;
              background: #f9f9f9;
              border-left: 3px solid #333;
              position: relative;
              padding-left: 50px;
            }
            .step-list li::before {
              content: counter(step-counter);
              position: absolute;
              left: 15px;
              top: 50%;
              transform: translateY(-50%);
              background: #333;
              color: white;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 0.9em;
            }
            .warning-box {
              background: #fff3cd;
              border: 1px solid #ffeaa7;
              padding: 15px;
              margin: 20px 0;
            }
            .warning-box h4 {
              color: #856404;
              margin: 0 0 10px 0;
              font-weight: bold;
            }
            .tip-box {
              background: #d1ecf1;
              border: 1px solid #bee5eb;
              padding: 15px;
              margin: 20px 0;
            }
            .tip-box h4 {
              color: #0c5460;
              margin: 0 0 10px 0;
              font-weight: bold;
            }
            .article-footer {
              background: #f8f9fa;
              border: 1px solid #dee2e6;
              padding: 20px;
              margin-top: 40px;
              text-align: center;
            }
            .article-footer p {
              margin: 0;
              font-size: 0.9em;
              color: #666;
            }
            @media (max-width: 768px) {
              .contract-elements {
                grid-template-columns: 1fr;
              }
              .article-title {
                font-size: 1.8em;
              }
            }
            
            /* Dark mode styles - using parent dark class */
            .dark .contract-drafting-article {
              color: #e5e5e5;
            }
            .dark .article-header {
              border-bottom-color: #e5e5e5;
            }
            .dark .article-title {
              color: #ffffff;
            }
            .dark .article-subtitle {
              color: #b3b3b3;
            }
            .dark .section h2 {
              color: #ffffff;
              border-bottom-color: #404040;
            }
            .dark .section h3 {
              color: #e5e5e5;
            }
            .dark .section h4 {
              color: #d1d1d1;
            }
            .dark .element-box, .dark .principle-box {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .element-box h4, .dark .principle-box h4 {
              color: #ffffff;
            }
            .dark .highlight-box {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .highlight-box h3 {
              color: #ffffff;
            }
            .dark .comparison-table {
              border-color: #404040;
            }
            .dark .comparison-table th {
              background: #404040;
              color: #ffffff;
              border-color: #404040;
            }
            .dark .comparison-table td {
              border-color: #404040;
            }
            .dark .comparison-table tr:nth-child(even) {
              background: #2a2a2a;
            }
            .dark .step-list li {
              background: #2a2a2a;
              border-left-color: #e5e5e5;
            }
            .dark .step-list li::before {
              background: #e5e5e5;
              color: #000000;
            }
            .dark .warning-box {
              background: #3d2f00;
              border-color: #6b4c00;
            }
            .dark .warning-box h4 {
              color: #ffd700;
            }
            .dark .tip-box {
              background: #0d2d3a;
              border-color: #1a4a5c;
            }
            .dark .tip-box h4 {
              color: #87ceeb;
            }
            .dark .article-footer {
              background: #2a2a2a;
              border-color: #404040;
            }
            .dark .article-footer p {
              color: #b3b3b3;
            }
          </style>
          
          <div class="contract-drafting-article">
            <div class="article-header">
              <h1 class="article-title">Contract Drafting Essentials in the UAE</h1>
              <p class="article-subtitle">Comprehensive Guide to Drafting Correct and Effective Legal Contracts</p>
            </div>
  
            <div class="section">
              <h2>Introduction to Contract Drafting in UAE System</h2>
              <p>Contract drafting is one of the most important legal skills in professional practice, requiring deep understanding of UAE laws and Islamic Sharia provisions. A good contract protects all parties' rights and prevents future disputes through clear terms and obligations.</p>
              
              <div class="highlight-box">
                <h3>Importance of Proper Legal Drafting</h3>
                <ul>
                  <li>Protecting rights and interests of all parties</li>
                  <li>Preventing future disputes and conflicts</li>
                  <li>Ensuring compliance with UAE laws</li>
                  <li>Clarifying obligations and rights precisely</li>
                  <li>Facilitating implementation and follow-up</li>
                  <li>Reducing legal and financial risks</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>Contract Elements in UAE System</h2>
              <p>Every contract must include basic elements as stipulated by UAE law and Islamic Sharia provisions:</p>
              
              <div class="contract-elements">
                <div class="element-box">
                  <h4>Basic Elements</h4>
                  <ul>
                    <li><strong>Contracting Parties:</strong> Two or more parties qualified to contract</li>
                    <li><strong>Subject Matter:</strong> The thing or service being contracted</li>
                    <li><strong>Formula:</strong> Offer and acceptance between parties</li>
                    <li><strong>Cause:</strong> Legitimate purpose of contracting</li>
                  </ul>
                </div>
                
                <div class="element-box">
                  <h4>Valid Conditions</h4>
                  <ul>
                    <li><strong>Capacity:</strong> Parties' capacity to contract</li>
                    <li><strong>Consent:</strong> Free and informed consent of parties</li>
                    <li><strong>Legality:</strong> Legality of subject matter and cause</li>
                    <li><strong>Clarity:</strong> Clarity of terms and obligations</li>
                  </ul>
                </div>
              </div>
  
              <div class="warning-box">
                <h4>Important Warning</h4>
                <p>Any deficiency in basic elements or presence of terms contrary to Sharia or law leads to contract nullity or legal unenforceability.</p>
              </div>
            </div>
  
            <div class="section">
              <h2>Main Types of Contracts</h2>
              
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Contract Type</th>
                    <th>Description</th>
                    <th>Common Uses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Commercial Contracts</td>
                    <td>Contracts between merchants or for commercial purposes</td>
                    <td>Sale, supply, distribution, agency</td>
                  </tr>
                  <tr>
                    <td>Civil Contracts</td>
                    <td>Contracts between individuals for personal purposes</td>
                    <td>Lease, sale, personal services</td>
                  </tr>
                  <tr>
                    <td>Employment Contracts</td>
                    <td>Contracts regulating employment relationships</td>
                    <td>Employment, consulting, contracting</td>
                  </tr>
                  <tr>
                    <td>Electronic Contracts</td>
                    <td>Contracts made through electronic means</td>
                    <td>E-commerce, digital services</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div class="section">
              <h2>Contract Drafting Steps</h2>
              <p>Contracts are drafted according to specific steps to ensure comprehensiveness and accuracy:</p>
              
              <ol class="step-list">
                <li><strong>Determine Contract Type:</strong> Identify contract nature and applicable laws</li>
                <li><strong>Gather Information:</strong> Collect all data and requirements</li>
                <li><strong>Identify Parties:</strong> Accurately identify parties' identity</li>
                <li><strong>Draft Content:</strong> Write contract clauses clearly</li>
                <li><strong>Legal Review:</strong> Review compliance with laws</li>
                <li><strong>Final Review:</strong> Comprehensive review before signing</li>
              </ol>
            </div>
  
            <div class="section">
              <h2>Essential Elements of Any Contract</h2>
              
              <h3>Preamble and Introduction</h3>
              <ul>
                <li><strong>Contract Title:</strong> Clear description of contract type</li>
                <li><strong>Contract Date:</strong> Hijri and Gregorian dates</li>
                <li><strong>Contract Place:</strong> Location where contract was concluded</li>
                <li><strong>Party Definition:</strong> Complete data for each party</li>
              </ul>
  
              <h3>Contract Body</h3>
              <div class="contract-elements">
                <div class="element-box">
                  <h4>Main Clauses</h4>
                  <ul>
                    <li>Contract subject and object</li>
                    <li>Each party's obligations</li>
                    <li>Financial consideration and payment</li>
                    <li>Contract duration and renewal</li>
                    <li>Implementation conditions</li>
                  </ul>
                </div>
                
                <div class="element-box">
                  <h4>Supplementary Clauses</h4>
                  <ul>
                    <li>Termination and cancellation conditions</li>
                    <li>Dispute resolution</li>
                    <li>Applicable law</li>
                    <li>Amendment and update</li>
                    <li>Guarantees and securities</li>
                  </ul>
                </div>
              </div>
  
              <h3>Conclusion and Signature</h3>
              <ul>
                <li><strong>Signature Clause:</strong> Place and date of signature</li>
                <li><strong>Witnesses:</strong> Names and signatures of witnesses (if any)</li>
                <li><strong>Authentication:</strong> Notary or authenticator seal</li>
              </ul>
            </div>
  
            <div class="section">
              <h2>Principles of Proper Drafting</h2>
              
              <div class="contract-elements">
                <div class="principle-box">
                  <h4>Clarity and Precision</h4>
                  <ul>
                    <li>Use clear and understandable language</li>
                    <li>Avoid ambiguous terms</li>
                    <li>Define concepts and terms</li>
                    <li>Use numbers and dates precisely</li>
                  </ul>
                </div>
                
                <div class="principle-box">
                  <h4>Comprehensiveness and Balance</h4>
                  <ul>
                    <li>Cover all contracting aspects</li>
                    <li>Balance rights and obligations</li>
                    <li>Address exceptional cases</li>
                    <li>Establish problem-solving mechanisms</li>
                  </ul>
                </div>
              </div>
  
              <div class="tip-box">
                <h4>Tips for Effective Drafting</h4>
                <ul>
                  <li>Start with essential elements then move to details</li>
                  <li>Use numbering and formatting to facilitate reading</li>
                  <li>Avoid repetition and unjustified lengthening</li>
                  <li>Review contract from each party's perspective</li>
                  <li>Ensure consistency in terminology usage</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>Terms to Avoid</h2>
              
              <div class="warning-box">
                <h4>Terms Prohibited by Sharia and Law</h4>
                <ul>
                  <li><strong>Usurious Terms:</strong> Any term containing prohibited usury or interest</li>
                  <li><strong>Excessive Uncertainty:</strong> Vague or unknown conditions</li>
                  <li><strong>Arbitrary Terms:</strong> Excessive and unjustified penalties</li>
                  <li><strong>Manipulation:</strong> Terms aimed at deception or fraud</li>
                  <li><strong>Harm:</strong> Terms causing unjustified harm</li>
                </ul>
              </div>
  
              <h3>Abusive Terms to Avoid</h3>
              <ul>
                <li>Complete exemption from liability without justification</li>
                <li>Granting one party arbitrary cancellation right</li>
                <li>Setting excessive and disproportionate penalties</li>
                <li>Restricting litigation or defense rights</li>
                <li>Unilateral modification of essential terms</li>
              </ul>
            </div>
  
            <div class="section">
              <h2>Compliance with UAE Laws</h2>
              
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>Legal Field</th>
                    <th>Basic Requirements</th>
                    <th>Competent Authority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Commercial Contracts</td>
                    <td>Compliance with Commerce Law and regulations</td>
                    <td>Ministry of Commerce</td>
                  </tr>
                  <tr>
                    <td>Employment Contracts</td>
                    <td>Compliance with UAE Labor Law</td>
                    <td>Ministry of Human Resources</td>
                  </tr>
                  <tr>
                    <td>Real Estate Contracts</td>
                    <td>Compliance with real estate and mortgage laws</td>
                    <td>Ministry of Justice</td>
                  </tr>
                  <tr>
                    <td>Electronic Contracts</td>
                    <td>Compliance with Electronic Transactions Law</td>
                    <td>Ministry of Commerce</td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <div class="section">
              <h2>Dispute Resolution in Contracts</h2>
              
              <h3>Dispute Resolution Mechanisms</h3>
              <ul>
                <li><strong>Direct Negotiation:</strong> Primary solution between parties</li>
                <li><strong>Mediation:</strong> Neutral third-party intervention</li>
                <li><strong>Arbitration:</strong> Resorting to arbitrator or arbitration panel</li>
                <li><strong>Litigation:</strong> Filing lawsuit before competent courts</li>
              </ul>
  
              <div class="tip-box">
                <h4>Tips to Avoid Disputes</h4>
                <ul>
                  <li>Establish clear dispute resolution mechanism</li>
                  <li>Specify applicable law</li>
                  <li>Identify competent court or arbitration body</li>
                  <li>Set time limits for procedures</li>
                  <li>Specify official language of contract</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>Authentication and Proof</h2>
              
              <h3>Authentication Methods</h3>
              <div class="contract-elements">
                <div class="element-box">
                  <h4>Traditional Authentication</h4>
                  <ul>
                    <li>Authentication with notary public</li>
                    <li>Signing before witnesses</li>
                    <li>Official sealing and certification</li>
                    <li>Registration in official records</li>
                  </ul>
                </div>
                
                <div class="element-box">
                  <h4>Electronic Authentication</h4>
                  <ul>
                    <li>Certified electronic signature</li>
                    <li>Digital timestamps</li>
                    <li>Electronic authentication certificates</li>
                    <li>Certified government platforms</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div class="section">
              <h2>Contract Templates and Forms</h2>
              
              <h3>Available Standard Contracts</h3>
              <ul>
                <li><strong>Sale Contracts:</strong> Certified templates for commercial and civil sales</li>
                <li><strong>Lease Contracts:</strong> Unified templates according to new system</li>
                <li><strong>Employment Contracts:</strong> Templates compliant with labor law</li>
                <li><strong>Service Contracts:</strong> Templates for professional and technical services</li>
              </ul>
  
              <div class="warning-box">
                <h4>Warning About Ready-Made Templates</h4>
                <p>Don't rely on ready-made templates without customizing them to your specific circumstances, as each contract has its uniqueness requiring appropriate drafting.</p>
              </div>
            </div>
  
            <div class="section">
              <h2>Practical Tips for Practitioners</h2>
              
              <div class="tip-box">
                <h4>For Lawyers and Consultants</h4>
                <ul>
                  <li>Ensure accurate understanding of client needs</li>
                  <li>Research relevant laws and regulations</li>
                  <li>Use precise and clear legal language</li>
                  <li>Review contract from Sharia and legal perspectives</li>
                  <li>Keep updated copy of all laws</li>
                </ul>
              </div>
  
              <div class="tip-box">
                <h4>For Contracting Parties</h4>
                <ul>
                  <li>Don't sign a contract you don't fully understand</li>
                  <li>Seek specialized lawyer assistance when needed</li>
                  <li>Keep original copy of contract</li>
                  <li>Review all clauses and terms carefully</li>
                  <li>Verify accuracy of recorded data</li>
                </ul>
              </div>
            </div>
  
            <div class="section">
              <h2>Recent Developments in Contract Drafting</h2>
              
              <h3>Smart Contracts and Modern Technologies</h3>
              <ul>
                <li><strong>Blockchain:</strong> Technology for contract preservation and authentication</li>
                <li><strong>Artificial Intelligence:</strong> Assistance in contract drafting and review</li>
                <li><strong>Digital Signature:</strong> Development of electronic signature mechanisms</li>
                <li><strong>Digital Platforms:</strong> Specialized contract management platforms</li>
              </ul>
  
              <div class="highlight-box">
                <h3>Future of Contract Drafting</h3>
                <p>Contract drafting is witnessing continuous development with technological and legislative progress, requiring practitioners to keep up with these developments and benefit from them in improving professional practice.</p>
              </div>
            </div>
  
            <div class="article-footer">
              <p><strong>Note:</strong> This article provides general information and does not replace specialized legal consultation. It is recommended to consult with a lawyer specialized in contract drafting for accurate legal advice suitable to each case.</p>
            </div>
          </div>
        `,
      },
    category: "business",
    categoryName: "القانون التجاري / Business Law",
    date: "2024-01-25",
    readTimeAr: "10 دقائق",
    readTimeEn: "10 min read",
    authorAr: "المحامي عبدالرحمن الهرمودي",
    authorEn: "Lawyer Abdulrahman Al-Harmoudi",
    image: blog_6.src,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  currentSlug: string,
  category: string,
  limit = 3
): Article[] {
  return articles
    .filter(
      (article) => article.slug !== currentSlug && article.category === category
    )
    .slice(0, limit);
}

export function getAllArticles(): Article[] {
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
