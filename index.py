import pandas as pd
df1A = pd.read_csv('D:\\데이터분석 프로젝트\\databass\\1A.csv')
df2A = pd.read_csv('D:\\데이터분석 프로젝트\\databass\\2A.csv')
df3A = pd.read_csv('D:\\데이터분석 프로젝트\\databass\\3A.csv')
df4A = pd.read_csv('D:\\데이터분석 프로젝트\\databass\\4A.csv')
df5A = pd.read_csv('D:\\데이터분석 프로젝트\\databass\\5A.csv')
df6A = pd.read_csv('D:\\데이터분석 프로젝트\\databass\\6A.csv')
df7A = pd.read_csv('D:\\데이터분석 프로젝트\\databass\\7A.csv')
df8A = pd.read_csv('D:\\데이터분석 프로젝트\\databass\\8A.csv')
df9A = pd.read_csv('D:\\데이터분석 프로젝트\\databass\\9A.csv')
# df1 = pd.read_csv('data/gapminder.tsv',sep='\t')
row_concat = pd.concat([df1A, df2A, df3A, df4A, df5A, df6A, df7A, df8A, df9A])
db = pd.DataFrame(row_concat)
b_long = pd.melt(db,

id_vars = ['STD_YM', 'CTPV_CD'],
var_name = 'CTPV_NM,CARD_HLDR_CT,AVG_CARD_CNT,AVG_CARD_LMT_AMT,CARD_USE_AMT,CRD_SLE_USE_AMT,LSP_USE_AMT,INSTL_USE_AMT,CASH_SVC_SUE_AMT,OVSEA_CSMP_AMT')

print(b_long)