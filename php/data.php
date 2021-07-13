<?php 
    while ($row = mysqli_fetch_assoc($sql)) {
        $sql2 = "SELECT * FROM meesages WHERE (incoming_msg_id = {$row['unique_id']} 
        OR outgoing_msg_id = {$row['unique_id']}) AND (incoming_msg_id = {$outgoing_id} 
        eOR outgoing_msg_id = {$outgoing_id}) ORDER BY msg_id DESC LIMIT 1";
        
        $output .= '<a href="chat.php?user_id='.$row['unique_id'].'">
                    <div class="content">
                    <img src="php/images/'.$row['img'].'" alt="">
                    <div class="details">
                        <span>'.$row['fname'].' '.$row['lname'].'</span>
                        <p>This is test message</p>
                    </div>
                    </div>
                    <div class="status-dot"><i class="fas fa-circle"></i></div>
                    </a>';
    }
?>