package com.medisure.policies.config.rabbitMQ;

import com.medisure.policies.config.RabbitMQConfigPoliciesToValidations;
import com.medisure.policies.domain.RabbitMessageModel;
import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class RabbitMQProducerPoliciesToValidations {

    private static final Logger logger = LoggerFactory.getLogger(RabbitMQProducerPoliciesToValidations.class);

    @Autowired
    private RabbitTemplate template;

    @Scheduled(cron = "0/15 * * * * *")
    public void publishMessage() {
        RabbitMessageModel message = new RabbitMessageModel();
        message.setMessage("Publishing this message from policies with key: " + RabbitMQConfigPoliciesToValidations.QUEUE);
        message.setDateTime(new Date());
        template.convertAndSend(RabbitMQConfigPoliciesToValidations.EXCHANGE, RabbitMQConfigPoliciesToValidations.ROUTING_KEY, message);
        logger.info("Message Published Successfully");
    }
}
