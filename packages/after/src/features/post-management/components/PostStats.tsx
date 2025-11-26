import React from 'react';

interface PostStatsProps {
  total: number;
  published: number;
  draft: number;
  archived: number;
  totalViews: number;
}

export const PostStats: React.FC<PostStatsProps> = ({ total, published, draft, archived, totalViews }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
      gap: '10px',
      marginBottom: '15px'
    }}>
      <div style={{
        padding: '12px 15px',
        background: '#e3f2fd',
        border: '1px solid #90caf9',
        borderRadius: '3px'
      }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>전체</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1976d2' }}>{total}</div>
      </div>

      <div style={{
        padding: '12px 15px',
        background: '#e8f5e9',
        border: '1px solid #81c784',
        borderRadius: '3px'
      }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>게시됨</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#388e3c' }}>{published}</div>
      </div>

      <div style={{
        padding: '12px 15px',
        background: '#fff3e0',
        border: '1px solid #ffb74d',
        borderRadius: '3px'
      }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>임시저장</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#f57c00' }}>{draft}</div>
      </div>

      <div style={{
        padding: '12px 15px',
        background: '#ffebee',
        border: '1px solid #e57373',
        borderRadius: '3px'
      }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>보관됨</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.6)' }}>{archived}</div>
      </div>

      <div style={{
        padding: '12px 15px',
        background: '#f5f5f5',
        border: '1px solid #bdbdbd',
        borderRadius: '3px'
      }}>
        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>총 조회수</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#424242' }}>{totalViews}</div>
      </div>
    </div>
  );
};
